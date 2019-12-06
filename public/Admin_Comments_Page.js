(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BKNV:function(e,n,t){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Comment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Comment"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"commentable_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"commentable_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comments_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"is_updated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserRelationship"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"comments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CommentRelationship"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]}]}}],loc:{start:0,end:357}};i.loc.source={body:'#import "../../../users/_gql/fragments/UserRelationshipFragment.gql"\n#import "./CommentRelationshipFragment.gql"\n\nfragment Comment on Comment {\n  __typename\n  id\n  user_id\n  commentable_type\n  commentable_id\n  comments_count\n  is_updated\n  content\n  user {\n    ...UserRelationship\n  }\n  comments {\n    ...CommentRelationship\n  }\n  created_at\n  updated_at\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function o(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0)})}i.definitions=i.definitions.concat(o(t("zFKB").definitions)),i.definitions=i.definitions.concat(o(t("K4P3").definitions)),e.exports=i},K4P3:function(e,n,t){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CommentRelationship"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Comment"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"commentable_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"commentable_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"is_updated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comments_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserRelationship"},directives:[]}]}}]}}],loc:{start:0,end:281}};i.loc.source={body:'#import "../../../users/_gql/fragments/UserRelationshipFragment.gql"\n\nfragment CommentRelationship on Comment {\n  __typename\n  id\n  user_id\n  content\n  commentable_id\n  commentable_type\n  is_updated\n  comments_count\n  created_at\n  updated_at\n  user {\n    ...UserRelationship\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};i.definitions=i.definitions.concat(t("zFKB").definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0)})),e.exports=i},M1ew:function(e,n,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Comments"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"comments"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Comment"},directives:[]}]}}]}}],loc:{start:0,end:143}};i.loc.source={body:'#import "../fragments/CommentFragment.gql"\n\nquery Comments($type: String!, $id: ID!) {\n  comments(type: $type, id: $id) {\n    ...Comment\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};i.definitions=i.definitions.concat(t("BKNV").definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0)}));var o={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}i.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),o[e.name.value]=n}}),e.exports=i,e.exports.Comments=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=o[n]||new Set,a=new Set,d=new Set;for(i.forEach(function(e){d.add(e)});0<d.size;){var m=d;d=new Set,m.forEach(function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach(function(e){d.add(e)}))})}return a.forEach(function(n){var i=r(e,n);i&&t.definitions.push(i)}),t}(i,"Comments")},MjJ3:function(e,n,t){"use strict";t.d(n,"a",function(){return d}),t.d(n,"b",function(){return m});var i=t("sLP4"),a=t("M1ew"),o=t.n(a),r=function(){return(r=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function d(e,n,t){var a=n.type,d=n.id,m={query:o.a,variables:{type:a,id:d}},s=e.readQuery(m);Object(i.a)(s.comments,t),e.writeQuery(r({},m,{data:s}))}function m(e,n,t){var a=n.type,d=n.id,m={query:o.a,variables:{type:a,id:d}},s=e.readQuery(m);Object(i.b)(s.comments,t),e.writeQuery(r({},m,{data:s}))}},V5HQ:function(e,n,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteComment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteComment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Comment"},directives:[]}]}}]}}],loc:{start:0,end:127}};i.loc.source={body:'#import "../fragments/CommentFragment.gql"\n\nmutation DeleteComment($id: ID!) {\n  deleteComment(id: $id) {\n    ...Comment\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};i.definitions=i.definitions.concat(t("BKNV").definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0)}));var o={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}i.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),o[e.name.value]=n}}),e.exports=i,e.exports.DeleteComment=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=o[n]||new Set,a=new Set,d=new Set;for(i.forEach(function(e){d.add(e)});0<d.size;){var m=d;d=new Set,m.forEach(function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach(function(e){d.add(e)}))})}return a.forEach(function(n){var i=r(e,n);i&&t.definitions.push(i)}),t}(i,"DeleteComment")},aY9z:function(e,n,t){"use strict";t.r(n);var i,a,o=t("YKMj"),r=t("V5HQ"),d=t.n(r),m=t("y4MM"),s=t("Ui4H"),l=t("MjJ3"),c=(i=function(e,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=function(){return(u=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},f=function(e,n,t,i){var a,o=arguments.length,r=o<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,i);else for(var d=e.length-1;0<=d;d--)(a=e[d])&&(r=(o<3?a(r):3<o?a(n,t,r):a(n,t))||r);return 3<o&&r&&Object.defineProperty(n,t,r),r};function v(){var e=null!==a&&a.apply(this,arguments)||this;return e.isCommentModalShown=!1,e.isCommentFormAdd=!0,e.commentForm={},e.commentsDataTableHeader={id:{title:"id"},commentable_type:{visible:!1},commentable_id:{visible:!1},content:{visible:!1},user:{slot:"author",title:"Author"},comments:{visible:!1},created_at:{title:"Created"},updated_at:{title:"Updated"},actions:{sortable:!1,title:"Actions",slot:"actions"}},e}var p=(c(v,a=o.e),v.prototype.closeCommentModal=function(){this.isCommentModalShown=!1,this.commentForm={}},v.prototype.handleCommentAdd=function(){this.isCommentFormAdd=!0,this.isCommentModalShown=!0},v.prototype.handleCommentEdit=function(e){this.isCommentFormAdd=!1,this.isCommentModalShown=!0;var n=u({},e);this.commentForm.commentable_id=e.commentable_id,this.commentForm.commentable_type=e.commentable_type,delete n.__typename,delete n.user,delete n.comments,delete n.created_at,delete n.updated_at,this.commentForm=n},v.prototype.handleCommentDelete=function(e){var n=e.id,t=e.commentable_id,i=e.commentable_type,a=e.content,o=e.user,r=e.comments,s=e.created_at,c=e.updated_at;return function(e,n,t,i){return new(t=t||Promise)(function(a,o){function r(e){try{m(i.next(e))}catch(e){o(e)}}function d(e){try{m(i.throw(e))}catch(e){o(e)}}function m(e){e.done?a(e.value):new t(function(n){n(e.value)}).then(r,d)}m((i=i.apply(e,n||[])).next())})}(this,void 0,void 0,function(){return function(e,n){var t,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function d(o){return function(d){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(a=0<(a=r.trys).length&&a[a.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(e){o=[6,e],i=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,d])}}}(this,function(e){switch(e.label){case 0:return[4,Object(m.a)(this.$t("resource.delete_confirmation",{resource:"Comment"}),!0)];case 1:return e.sent()?[4,this.$apollo.mutate({mutation:d.a,variables:{id:n},update:function(e,n){var a=n.data.deleteComment;Object(l.b)(e,{type:i,id:t},a)},optimisticResponse:{__typename:"Mutation",id:n,deleteUser:{__typename:"Comment",id:n,commentable_id:t,commentable_type:i,content:a,user:o,comments:r,created_at:s,updated_at:c}}})]:[2];case 2:return e.sent(),Object(m.a)(this.$t("resource.deleted",{resource:"Comment"}),!1),[2]}})})},Object.defineProperty(v.prototype,"searchInputPlaceHolder",{get:function(){return this.$t("resource.search",{resource:"comments"})},enumerable:!0,configurable:!0}),f([Object(o.d)()],v.prototype,"commentsDataTableHeader",void 0),v=f([Object(o.a)({components:{CommentForm:function(){return t.e(8).then(t.bind(null,"WV6n"))}},metaInfo:u({},Object(s.b)("Manage Comments","Lavuql comments management page","admin/comments",""),{meta:[{name:"robots",content:"NOINDEX, NOFOLLOW"}]})})],v)),k=t("KHd+"),y=Object(k.a)(p,function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("lvql-layout",{attrs:{name:"Admin"}},[i("apollo-query",{attrs:{query:t("M1ew")},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result,a=t.data,o=t.loading,r=t.error;return n.query,[o?i("div",{staticClass:"loading apollo"},[i("grid",[i("grid-row",[i("grid-item",{attrs:{fill:""}},[i("lvql-loader",{attrs:{size:"large"}})],1)],1)],1)],1):r?i("div",{staticClass:"error apollo"},[i("grid",[i("grid-row",[i("grid-item",{attrs:{fill:""}},[i("pre",[e._v(e._s(r))])])],1)],1)],1):a?i("div",{staticClass:"result apollo"},[i("lvql-modal",{attrs:{show:e.isCommentModalShown},on:{close:e.closeCommentModal}},[i("comment-form",{attrs:{"is-add":e.isCommentFormAdd,comment:e.commentForm,type:e.commentForm.commentable_type,"type-id":e.commentForm.commentable_id}})],1),i("grid",[i("grid-row",[i("grid-item",[i("lvql-button",{attrs:{variant:"primary"},on:{click:e.handleCommentAdd}},[e._v(e._s(e.$t("resource.add",{resource:"Comment"})))])],1)],1),i("grid-row",[i("grid-item",{attrs:{fill:""}},[i("data-table",{attrs:{header:e.commentsDataTableHeader,data:a.comments,placeholder:e.searchInputPlaceHolder},scopedSlots:e._u([{key:"author",fn:function(n){var t=n.row;return[e._v(e._s(t.user.name))]}},{key:"actions",fn:function(n){var t=n.row;return[i("lvql-button",{attrs:{variant:"accent",isGhost:!0},on:{click:function(n){return e.handleCommentEdit(t)}}},[i("i",{staticClass:"fas fa-pencil-alt"})]),i("lvql-button",{attrs:{variant:"danger",isGhost:!0},on:{click:function(n){return e.handleCommentDelete(t)}}},[i("i",{staticClass:"fas fa-trash"})])]}}],null,!0)})],1)],1)],1)],1):e._e()]}}])})],1)},[],!1,null,null,null);n.default=y.exports},sLP4:function(e,n,t){"use strict";function i(e,n){var t=e.findIndex(function(e){return e.id===n.id});-1===t?e.unshift(n):e.splice(t,1,n)}function a(e,n){var t=e.findIndex(function(e){return e.id===n.id});-1!==t&&e.splice(t,1)}t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},y4MM:function(e,n,t){"use strict";var i=t("mTVC"),a=t("QcY0"),o=Object(i.create)(a.default,"message","isConfirm");n.a=o},zFKB:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserRelationship"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}],loc:{start:0,end:71}};t.loc.source={body:"fragment UserRelationship on User {\n  __typename\n  id\n  name\n  email\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}},e.exports=t}}]);