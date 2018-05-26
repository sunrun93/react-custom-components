# React通用组件

近期正在逐步摸索学习React的用法，尝试着写几个通用型的组件，整体项目还是根据webpack+react+css-medules构建，
启动项目：

```
git clone git@github.com:sunrun93/react-blog-app.git
npm i 
npm start
```
启动项目后，如若发现本地css未生效，请在node_modules\react-scripts\config\webpack.config.dev.js和node_modules\react-scripts\config\webpack.config.prod.js找到对应的css-loader, 在其options中添加如下两项(modules,localIdentName):
```
 loader: require.resolve('css-loader'),
 options: {
        modules: true, 
        localIdentName: '[name]__[local]__[hash:base64:5]'
}

```
主要组件包括：
1. Search-box:具有输入搜索功能的下拉列表，仅支持单项选中，并可根据用户输入匹配筛选选项，调用方式如下：
```
let options = [
      { id: '1', label: 'Option-A', value: 'Option-A' },
      { id: '2', label: 'Option-B', value: 'Option-B' },
      { id: '3', label: 'Option-C', value: 'Option-C' },
      { id: '4', label: 'Option-D', value: 'Option-D' }
    ];
<SearchBox options={options}/> //显示label
```
2. Toggle-btn:模仿ios系统中的开关按钮，基于checkbox实现一个toggle-btn的小插件。样式上，隐藏checkbox勾选框的样式，将troggle-btn的样式添加到checkbox的label上：
```
 <input type="checkbox" checked={this.state.isCheck}
    className={this.state.isCheck?styles.greenDotRight:styles.greenDotLeft}/>
 <label></label>

  input[type='checkbox'] {
          visibility:hidden;
          position:absolute;
      }

  .greenDotLeft+label{
      width:30px;
      height: 30px;
      border-radius: 15px;
      background-color:lightgray;
      display: inline-block;
      position: absolute;
      left: 0;
  }

  .greenDotRight+label{
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: lawngreen;
      display: inline-block;
      position: absolute;
      right:0;
  }
```
调用方式如下：
```
 <ToggleBtn isChecked={isChecked} onClick={toggleEvent}/> //onClick触发想要调用的方法，接受一个参数拿到当前的状态，isChecked可定义初始化的值
```
3. dialog-component 对话框组件