import React from 'react';
import moment from 'moment';
import styles from './Calendar.css';

function getDisplayMonthDays(year) {
    //定义每个月的天数，如果是闰年第二月改为29天
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
    }

    //以下为了获取一年中每一个月在日历选择器上显示的数据，
    //从上个月开始，接着是当月，最后是下个月开头的几天

    //定义一个数组，保存上一个月的天数,将整个数组索引前移1位
    let daysInPreviousMonth = [].concat(daysInMonth);
    daysInPreviousMonth.unshift(daysInPreviousMonth.pop())
    //pop(),删除并返回数组的最后一个元素
    //shift()删除并返回数组的第一个元素，unshift()向数组的开头添加一个或多个元素

    //获取每一个月显示数据中需要补足上个月的天数
    let addDaysFromPreMonth = getAddDaysFromPreMonth(year);

    //已数组形式返回一年中每个月的显示数据,每个数据为6行*7天
    return new Array(12)
        .fill([]) //[[],[],[]...]
        .map((month, monthIndex) => {
            let addDays = addDaysFromPreMonth[monthIndex], //以此判断每月需要从上一个月补几天
                daysCount = daysInMonth[monthIndex], //依次取每当前个月的天数
                daysCountPrevious = daysInPreviousMonth[monthIndex], //依次取前一个月的天数
                monthData = []
            //补足上一个月
            for (; addDays > 0; addDays--) {
                monthData.unshift(daysCountPrevious--) //unshift()向数组的开头添加一个或多个元素，依次从前一个月末尾取值插入到前一个月
            }
            //添入当前月
            for (let i = 0; i < daysCount;) {
                monthData.push(++i)
            }
            //补足下一个月
            for (let i = 42 - monthData.length, j = 0; j < i;) {
                monthData.push(++j)
            }
            return monthData //总共显示42天的日期
        });
}


function getAddDaysFromPreMonth(year) {
    let addDaysFromPreMonth = new Array(12)
        .fill(null) //ES6 数组初始化，使用指定的元素填充数组[null,null,.....]
        .map((item, index) => {
            //依次取每个月的第一天，判断是星期几，我们将日历的第一列定义为周天(day=0)
            let day = new Date(year, index, 1).getDay();
            if (day === 0) {
                return 7 //如果1号是周天，则补充上月的七天
            } else {
                return day; //如果不是周一，则对应从上月取值补足一周
            }
        });
    return addDaysFromPreMonth;
}


class Calendar extends React.Component{
    constructor(props){
        super(props);
        let currentDay = new Date();
        this.state={
            year:currentDay.getFullYear(),
            month:currentDay.getMonth(),
            day:currentDay.getDate()
        };
    }
    showPrevMonth(){
        this.setState({
            year:this.state.month===0?(--this.state.year):this.state.year,
            month:this.state.month===0?11:(--this.state.month)
        })
    }
    showNextMonth(){
        this.setState({
            year:this.state.month===11?(++this.state.year):this.state.year,
            month:this.state.month===11?0:(++this.state.month)
        })
    }

    render(){
        return(
            <div className={styles.calendar}>
                <CalendarHeader 
                    year={this.state.year}
                    month={this.state.month}
                    day={this.state.day}
                    showPrevMonth={this.showPrevMonth.bind(this)} 
                    showNextMonth={this.showNextMonth.bind(this)} />
                <CalendarMain year={this.state.year}
                    month={this.state.month}
                    day={this.state.day}
                    showPrevMonth={this.showPrevMonth.bind(this)} 
                    showNextMonth={this.showNextMonth.bind(this)}
                    viewData={getDisplayMonthDays(this.state.year)}/>
            </div>
        )
    }
}


function CalendarHeader(props){
    let date = `${props.year}-${props.month+1}-${props.day}`;
    return(
        <div className={styles.calendarHeader}>
            <span className={styles.prevArrow} onClick={props.showPrevMonth}>《</span>
            <span className={styles.dateLabel}>{date}</span>
            <span className={styles.nextArrow} onClick={props.showNextMonth}>》</span>
        </div>
    )
}

class CalendarMain extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        let props = this.props;
        let month = props.viewData[props.month],
        rowsInMonth = [],
        i = 0,
        styleOfDays = (()=> {
            let i = month.indexOf(1),
            j = month.indexOf(1, i + 1),
            arr = new Array(42)
            arr.fill('prevMonth', 0, i)
            arr.fill('thisMonth', i, j)
            arr.fill('nextMonth', j)
            return arr;
        })()

        //把每一个月的显示数据以7天为一组等分
        month.forEach((day, index) => {
            if (index % 7 === 0) {
                rowsInMonth.push(month.slice(index, index + 7))
            }
        })

        return(
            <table className={styles.calendarMain}>
                <thead>
                    <tr>~
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                </thead>
                <tbody>
                {
                    rowsInMonth.map((row, rowIndex)=> {
                        return (
                        <tr key={rowIndex}>
                            {
                            row.map((day)=> {
                                return (
                                <td className={styleOfDays[i]}
                                    key={i++}>
                                    {day}
                                </td>
                                )
                            })
                            }
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default Calendar; 
