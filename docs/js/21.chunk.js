webpackJsonp([21],{181:function(t,e,i){var n,o,p;!function(s,l){o=[e,i(7)],n=l,p="function"==typeof n?n.apply(e,o):n,!(void 0!==p&&(t.exports=p))}(this,function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{iInput:i.iInput,Icon:i.Icon,iButton:i.iButton,iSelect:i.iSelect,iOption:i.iOption,InputNumber:i.InputNumber},props:{},data:function(){return{v:"hello",t:"",autosize:{minRows:2,maxRows:5},select1:"http",select2:"com"}},computed:{},methods:{enter:function(){console.log(123)},iconclick:function(){console.log("iconclicked")},change:function(t){console.log(t)},focus:function(){this.$Message.info("focus")},blur:function(){this.$Message.info("blur")}}},t.exports=e.default})},352:function(t,e){t.exports=' <input-number :max=10 :min=1 :value=1></input-number> <br><br> <i-input type=textarea :autosize=true placeholder=请输入...></i-input> <i-input type=textarea :autosize="{minRows: 2,maxRows: 5}" placeholder=请输入...></i-input> <i-input name=a icon=ios-clock-outline @on-focus=focus @on-blur=blur readonly=readonly style=width:200px :value.sync=v @on-enter=enter @on-click=iconclick size=large placeholder=请输入></i-input> <i-input icon=ios-clock-outline style=width:200px :value.sync=v @on-enter=enter placeholder=请输入></i-input> <i-input name=b icon=ios-clock-outline style=width:200px :value.sync=v @on-enter=enter size=small placeholder=请输入></i-input> <br> <br> <i-input style=width:200px :value.sync=v @on-enter=enter size=large placeholder=请输入></i-input> <i-input style=width:200px :value.sync=v @on-enter=enter placeholder=请输入></i-input> <i-input style=width:200px :value.sync=v @on-enter=enter @on-change=change size=small placeholder=请输入></i-input> {{ v }} <br> <br> <i-input readonly=readonly placeholder="this is something" style=width:200px :value.sync=t type=textarea :autosize=autosize></i-input> {{ t }} <br> <br> <div style="width: 400px"> <i-input :value.sync=v type=password> <span slot=prepend>http://</span> <span slot=append> <i-button icon=ios-search></i-button> </span> </i-input> <br> <i-input :value.sync=v> <span slot=prepend>http://</span> <span slot=append><icon type=ios-search></icon></span> </i-input> <br> <i-input :value.sync=v size=small> <span slot=prepend>http://</span> <span slot=append><icon type=ios-search></icon></span> </i-input> <br> <i-input :value.sync=v size=large> <i-select :model.sync=select1 slot=prepend style="width: 80px"> <i-option value=http>http://</i-option> <i-option value=https>https://</i-option> </i-select> <i-select :model.sync=select2 slot=append style="width: 70px"> <i-option value=com>.com</i-option> <i-option value=cn>.cn</i-option> <i-option value=net>.net</i-option> <i-option value=io>.io</i-option> </i-select> </i-input> <br> <i-input :value.sync=v> <i-select :model.sync=select1 slot=prepend style="width: 80px"> <i-option value=http>http://</i-option> <i-option value=https>https://</i-option> </i-select> <i-select :model.sync=select2 slot=append style="width: 70px"> <i-option value=com>.com</i-option> <i-option value=cn>.cn</i-option> <i-option value=net>.net</i-option> <i-option value=io>.io</i-option> </i-select> </i-input> <br> <i-input :value.sync=v size=small> <i-select :model.sync=select1 slot=prepend style="width: 80px"> <i-option value=http>http://</i-option> <i-option value=https>https://</i-option> </i-select> <i-select :model.sync=select2 slot=append style="width: 70px"> <i-option value=com>.com</i-option> <i-option value=cn>.cn</i-option> <i-option value=net>.net</i-option> <i-option value=io>.io</i-option> </i-select> </i-input> <input-number :value=2 size=small></input-number> <input-number :value=2></input-number> <input-number :value=2 size=large></input-number> <i-input type=password></i-input> </div> '},462:function(t,e,i){var n,o,p={};n=i(181),o=i(352),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(p).forEach(function(t){var e=p[t];s.computed[t]=function(){return e}})}});