"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{9454:function(e,n,t){var r=t(1087),c=t(4570),i=t(9504),a=t(2169),o=t(890),s=t(6647),u=t(4554),l=t(3654),d=t(184);n.Z=function(e){var n=e.films,t=e.location;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u.Z,{sx:{flexGrow:1},children:(0,d.jsx)(l.Z,{container:!0,spacing:{xs:2,md:3},children:n.map((function(e){return(0,d.jsx)(l.Z,{lg:3,md:4,sm:6,xs:12,children:(0,d.jsx)(r.Link,{state:{from:t},to:"/movies/".concat(e.id),children:(0,d.jsx)(c.Z,{sx:{maxWidth:365},children:(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(a.Z,{component:"img",height:"450",image:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:e.title}),(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(o.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),(0,d.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:e.overview})]})]})})})},e.id)}))})})})}},2591:function(e,n,t){t.r(n),t.d(n,{getActorsForMovie:function(){return u},getMovieForId:function(){return s},getMoviesBySearchTerm:function(){return d},getReviewsForMovie:function(){return l},getTrendingFilmsToday:function(){return o}});var r=t(1243),c="https://api.themoviedb.org/3",i="ab598497fd3a9501ac3ad96f36b0f9e2",a="language=en-US",o=function(){return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(i,"&").concat(a))},s=function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(i,"&").concat(a))},u=function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i,"&").concat(a))},l=function(e){return r.Z.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&").concat(a))},d=function(e){return r.Z.get("".concat(c,"/search/movie"),{params:{query:e,api_key:i}})}},4936:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5861),c=t(9439),i=t(4687),a=t.n(i),o=t(4138),s=t(9454),u=t(2591),l=t(2791),d="Home_h2__TWBWi",f=t(184),h=function(){var e=(0,l.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],h=(0,l.useState)(!1),m=(0,c.Z)(h,2),v=m[0],g=m[1],p=(0,l.useState)(null),x=(0,c.Z)(p,2),Z=x[0],j=x[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,u.getTrendingFilmsToday)();case 4:n=e.sent,t=n.data.results,i(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h2",{className:d,children:"Trending films"}),v?(0,f.jsx)(o.Z,{}):null,Z?(0,f.jsx)("p",{children:Z}):null,(0,f.jsx)("ul",{children:(0,f.jsx)(s.Z,{films:t})})]})}}}]);
//# sourceMappingURL=936.617beff3.chunk.js.map