(this["webpackJsonpsoc-network-ts"]=this["webpackJsonpsoc-network-ts"]||[]).push([[3],{303:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var o=s(5),a=s(52),i=(s(1),s(12)),n=s(19),c=s(0),r=function(t){return{isAuth:t.Auth.isAuth}};function u(t){return Object(n.b)(r,{})((function(e){var s=e.isAuth,n=Object(a.a)(e,["isAuth"]);return s?Object(c.jsx)(t,Object(o.a)({},n)):Object(c.jsx)(i.a,{to:"/login"})}))}},305:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__ouctn",profileItemLeft:"ProfileInfo_profileItemLeft__20l_r",profileItemRight:"ProfileInfo_profileItemRight__1h1Y3",profileImg:"ProfileInfo_profileImg__13Bxu",statusMark:"ProfileInfo_statusMark__ijyGc",jobDescription:"ProfileInfo_jobDescription__3YClo",profileInfoItem:"ProfileInfo_profileInfoItem__36NGh",fullName:"ProfileInfo_fullName__2DoR2",contacts:"ProfileInfo_contacts__3wyFn",aboutMeInfo:"ProfileInfo_aboutMeInfo__3BGg6"}},306:function(t,e,s){t.exports={post:"Post_post__2KBdE",postMessage:"Post_postMessage__1yBy-",likeItem:"Post_likeItem__1fBVP",fa:"Post_fa__mflSn"}},308:function(t,e,s){t.exports={statusContainer:"ProfileStatus_statusContainer__1jrZn"}},309:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="thumbs-up",a=[],i="f164",n="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z";e.definition={prefix:"far",iconName:o,icon:[512,512,a,i,n]},e.faThumbsUp=e.definition,e.prefix="far",e.iconName=o,e.width=512,e.height=512,e.ligatures=a,e.unicode=i,e.svgPathData=n},310:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__i-OIe",form:"MyPosts_form__IDQha",buttonForm:"MyPosts_buttonForm__2op7e",posts:"MyPosts_posts__3KCWE"}},311:function(t,e,s){t.exports={profileContainer:"Profile_profileContainer__3rQfL"}},312:function(t,e,s){"use strict";s.r(e);var o=s(5),a=s(39),i=s(40),n=s(43),c=s(42),r=s(1),u=s.n(r),l=s(305),f=s.n(l),p=s(72),j=s(140),d=s(308),b=s.n(d),m=s(0),h=function(t){var e=Object(r.useState)(!1),s=Object(j.a)(e,2),o=s[0],a=s[1],i=Object(r.useState)(t.status),n=Object(j.a)(i,2),c=n[0],u=n[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(m.jsxs)("div",{className:"".concat(f.a.profileInfoItems," ").concat(b.a.statusContainer),children:[!o&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status||"------"})}),o&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(c)},value:c})})]})};function O(t){return t.profile?Object(m.jsxs)("div",{className:f.a.descriptionBlock,children:[Object(m.jsxs)("div",{className:f.a.profileItemLeft,children:[Object(m.jsx)("div",{className:"".concat(f.a.profileInfoItems," ").concat(f.a.profileImg),children:Object(m.jsx)("img",{src:t.profile.photos.large})}),Object(m.jsx)("div",{className:" ".concat(f.a.profileInfoItems," ").concat(f.a.fullName),children:t.profile.fullName}),Object(m.jsx)("div",{className:f.a.statusMark,children:"Write your status:"}),Object(m.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]}),Object(m.jsxs)("div",{className:f.a.profileItemRight,children:[Object(m.jsxs)("div",{className:f.a.jobDescription,children:[Object(m.jsx)("div",{className:f.a.profileInfoItem,children:"Looking for a job:"}),Object(m.jsx)("div",{children:t.profile.lookingForAJobDescription})]}),Object(m.jsxs)("div",{className:f.a.aboutMeInfo,children:[Object(m.jsx)("div",{className:f.a.profileInfoItem,children:"About me:"}),Object(m.jsx)("div",{children:t.profile.aboutMe})]}),Object(m.jsx)("div",{className:f.a.contacts,children:Object(m.jsx)("div",{className:f.a.profileInfoItem,children:"My contacts:"})})]})]}):Object(m.jsx)(p.a,{})}var _=s(306),x=s.n(_),I=s(14),v=s(309);var g=function(t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:"https://images.app.goo.gl/5ZCf4bKyMsx3XMHf7",alt:"userImg"}),Object(m.jsx)("div",{className:x.a.postMessage,children:t.message}),Object(m.jsx)("div",{className:x.a.likeItem,children:Object(m.jsxs)("span",{children:[Object(m.jsx)(I.a,{icon:v.faThumbsUp,className:x.a.fa})," ",t.likesCount]})})]})},P=s(310),N=s.n(P),k=s(93),M=s(139),y=s(90),C=s(70),S=Object(y.a)(50),A=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(m.jsx)("div",{className:x.a.post,children:Object(m.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)})}));return Object(m.jsxs)("div",{className:N.a.postsBlock,children:[Object(m.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(m.jsx)("div",{className:N.a.posts,children:e})]})}));var B=Object(M.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,className:N.a.form,children:[Object(m.jsx)("div",{className:N.a.formField,children:Object(m.jsx)(k.a,{component:C.b,placeholder:"Write your thoughts...",name:"newPostText",validate:[y.b,S]})}),Object(m.jsx)("button",{className:N.a.buttonForm,children:"Add post"})]})})),w=A,D=s(105),F=s(19),U=Object(F.b)((function(t){return{posts:t.ProfilePage.posts}}),(function(t){return{addPost:function(e){t(Object(D.a)(e))}}}))(w),z=s(311),L=s.n(z);var T=function(t){return Object(m.jsxs)("div",{className:L.a.profileContainer,children:[Object(m.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(m.jsx)(U,{})]})},R=s(12),E=s(303),G=s(10),H=function(t){Object(n.a)(s,t);var e=Object(c.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;!t&&this.props.authorizedUserId&&((t=+this.props.authorizedUserId)||this.props.history.push("/login")),this.props.getUserProfile(+t),this.props.getUserStatus(+t)}},{key:"render",value:function(){return Object(m.jsx)(T,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(G.d)(Object(F.b)((function(t){return{profile:t.ProfilePage.profile,status:t.ProfilePage.status,authorizedUserId:t.Auth.userId,isAuth:t.Auth.isAuth}}),{getUserProfile:D.c,getUserStatus:D.d,updateStatus:D.e}),R.f,E.a)(H)}}]);
//# sourceMappingURL=3.b78f8bbf.chunk.js.map