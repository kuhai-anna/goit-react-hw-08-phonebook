"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[628],{3535:function(n,e,r){r.d(e,{z:function(){return s}});var t,o=r(168),i=r(7691).ZP.button(t||(t=(0,o.Z)(["\n  width: 100%;\n  margin-top: ",";\n  padding: ",";\n\n  font-size: 16px;\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: ",";\n\n  border: 1px solid transparent;\n  border-radius: ",";\n  outline: none;\n\n  transition-property: color, border-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.textAccent}),(function(n){return n.theme.colors.borderHover})),a=r(184),s=function(n){var e=n.text;return(0,a.jsx)(i,{type:"submit",children:e})}},1343:function(n,e,r){r.d(e,{X:function(){return s}});var t=r(1413),o=r(5705),i=r(7870),a=r(184),s=function(n){var e=n.name,r=n.label,s=n.type,c=void 0===s?"text":s,l=n.children;return(0,a.jsx)(o.gN,{name:e,children:function(n){var o=n.field,s=n.form,u=s.touched,d=s.errors;return(0,a.jsx)(i.Z,(0,t.Z)((0,t.Z)({},o),{},{type:c,label:r,variant:"filled",error:u[e]&&Boolean(d[e]),helperText:u[e]&&d[e],fullWidth:!0,margin:"normal",size:"small",InputProps:{endAdornment:l}}))}})}},1628:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,o=r(9434),i=r(9439),a=r(6727),s=r(5705),c=r(9273),l=r(2791),u=r(3400),d=r(9569),m=r(3710),p=r(1343),f=r(3271),h=r(3535),x=r(168),b=(0,r(7691).ZP)(s.l0)(t||(t=(0,x.Z)(["\n  margin: "," auto;\n  max-width: 440px;\n"])),(function(n){return n.theme.spacing(0)})),g=r(184),v=a.Ry().shape({email:a.Z_("Enter your email").email("Enter a valid email").required("Email is required field!"),password:a.Z_("Enter your password").min(8,"The length of the password must be at least 8 characters").required("Password is required")}),w={email:"",password:""},Z=function(){var n=(0,o.I0)(),e=(0,l.useState)(!1),r=(0,i.Z)(e,2),t=r[0],a=r[1];return(0,g.jsx)(s.J9,{initialValues:w,validationSchema:v,onSubmit:function(e,r){var t=e.email,o=e.password,i=r.resetForm;n((0,c.Ib)({email:t,password:o})),i()},children:(0,g.jsxs)(b,{children:[(0,g.jsx)(p.X,{name:"email",label:"Email"}),(0,g.jsx)(p.X,{name:"password",label:"Password",type:t?"text":"password",children:(0,g.jsx)(u.Z,{onClick:function(){a((function(n){return!n}))},sx:{":hover":{color:"".concat(f.r.colors.textAccent)}},children:t?(0,g.jsx)(d.Z,{}):(0,g.jsx)(m.Z,{})})}),(0,g.jsx)(h.z,{text:"Login"})]})})},j=r(4217),z=r(9677),y=function(){var n=(0,o.v9)(j.zh);return(0,g.jsxs)(z.$,{children:[(0,g.jsx)(Z,{}),n&&(0,g.jsx)("p",{style:{color:"".concat(f.r.colors.textError),marginTop:"".concat(f.r.spacing(4)),textAlign:"center"},children:"Oops, something went wrong... Please, try again."})]})}},3710:function(n,e,r){var t=r(9201),o=r(184);e.Z=(0,t.Z)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(n,e,r){var t=r(9201),o=r(184);e.Z=(0,t.Z)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")}}]);
//# sourceMappingURL=628.133ea8a2.chunk.js.map