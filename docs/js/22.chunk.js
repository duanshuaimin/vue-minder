webpackJsonp([22],{180:function(t,e,o){var i,a,n;!function(o,r){a=[e],i=r,n="function"==typeof i?i.apply(e,a):i,!(void 0!==n&&(t.exports=n))}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{formValidate:{input:"123",ajax:!0},ruleValidate:{}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.$Message.success("提交成功!"):e.$Message.error("表单验证失败!")})},handleReset:function(t){this.$refs[t].resetFields()}}},t.exports=e.default})},351:function(t,e){t.exports=' <i-form v-ref:form-validate :model=formValidate :rules=ruleValidate :label-width=100> <form-item label=输入框 prop=input> <i-input :value.sync=formValidate.input placeholder=请输入></i-input> </form-item> <form-item label=Ajax： prop=ajax> <div slot=label> <span>Ajax</span> <tooltip content="基于 axios"> <icon type=ios-help size=14 color=#3399ff></icon> </tooltip> <span>：</span> </div> <switch :checked.sync=formValidate.ajax></switch> </form-item> <form-item> <i-button type=primary @click="handleSubmit(\'formValidate\')">提交</i-button> <i-button type=ghost @click="handleReset(\'formValidate\')" style="margin-left: 8px">重置</i-button> </form-item> </i-form> '},461:function(t,e,o){var i,a,n={};i=o(180),a=o(351),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})}});