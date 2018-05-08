# React通用组件

近期正在逐步摸索学习React的用法，尝试着写几个通用型的组件，整体项目还是根据webpack+react+css-medules构建，
启动项目：
```
npm start
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
