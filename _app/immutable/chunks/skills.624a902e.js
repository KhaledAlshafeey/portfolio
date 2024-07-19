import{A as r}from"./UIcon.9b53127e.js";function d(e,...o){const s=Object.assign({},e);return Object.keys(s).forEach(t=>{o.includes(t)&&delete s[t]}),s}const a=e=>e,u=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],i=e=>{const o=d(e,"category");return e.category&&(o.category=u.find(s=>s.slug===e.category)),o},g=[i({slug:"js",color:"yellow",description:"JavaScript (JS) is a versatile, high-level programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Initially developed by Netscape as a means to add dynamic and interactive elements to websites, JavaScript has since become a crucial tool for front-end and back-end development.",logo:r.JavaScript,name:"Javascript",category:"pro-lang"}),i({slug:"css",color:"blue",description:"CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript, and is used to control the visual layout, formatting, and design of web pages.",logo:r.CSS,name:"CSS",category:"markup-style"}),i({slug:"html",color:"orange",description:"HTML (HyperText Markup Language) is the standard markup language used to create and design the structure of web pages and web applications. It forms the backbone of the World Wide Web, providing a way to structure content with a set of elements that define various parts of a web page.",logo:r.HTML,name:"HTML",category:"markup-style"}),i({slug:"flutter",color:"blue",description:"Flutter is a cross-platform UI toolkit that is designed to allow code reuse across operating systems such as iOS and Android, while also allowing applications to interface directly with underlying platform services.",logo:r.Flutter,name:"Flutter",category:"library"}),i({slug:"firebase",color:"yellow",description:"Firebase is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.",logo:r.Firebase,name:"Firebase",category:"devtools"}),i({slug:"dart",color:"yellow",description:"Dart is a versatile and powerful programming language developed by Google, designed for building high-performance applications across various platforms. It is optimized for client-side development, making it an excellent choice for both web and mobile applications. Dart's syntax is easy to learn for those familiar with languages like JavaScript, Java, and C#, allowing developers to quickly become productive. Used with Flutter mainly.",logo:r.Dart,name:"Dart",category:"pro-lang"})],m="Skills",f=(...e)=>g.filter(o=>e.includes(o.slug)),y=e=>{const o=[],s=[];return g.forEach(t=>{if(e.trim()&&!t.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!t.category){console.log(t.category),s.push(t);return}let n=o.find(c=>{var l;return c.category.slug===((l=t.category)==null?void 0:l.slug)});n||(n={items:[],category:t.category},o.push(n)),n.items.push(t)}),s.length!==0&&o.push({category:{name:"Others",slug:"others"},items:s}),o};export{y as a,f as g,g as i,m as t};
