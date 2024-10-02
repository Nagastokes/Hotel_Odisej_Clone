gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var h1text=document.querySelectorAll("#page2 h1")
var splitted;
h1text.forEach(function(elem){
    var clutter="";
    splitted=elem.textContent.split("")
    splitted.forEach(function(e){
        clutter+=`<span>${e}</span>`;
    })
    elem.innerHTML=clutter;
})
gsap.to("#page2 h1 span",{
    color:"#F7F7EE",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:2,
    }
})

var page3h1text=document.querySelectorAll("#above h1")
var scattered2;
page3h1text.forEach(function(elem){
    var clutter="";
    scattered2=elem.textContent.split("");
    scattered2.forEach(function(e){
        clutter+=`<span>${e}</span>`;
    })
    elem.innerHTML=clutter;
})
gsap.to("#above h1 span",{
    color:"#434B34",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#above h1 span",
        scroller:"#main",
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})
var checkin=document.querySelector("#rightone");
var booknow=document.querySelector("#righttwo");
checkin.addEventListener("mouseenter",function(){
    gsap.from("#rightone",{
        // y:"-20%",
        backgroundColor:"#E3E3C4",
        duration:0.6,
        // opacity:0
    })
    gsap.from("#rightone #one",{
        y:50,
        // opacity:0,
        duration:0.5,
        yoyo:true
    })
})
booknow.addEventListener("mouseenter",function(){
    gsap.from("#righttwo",{
        backgroundColor:"#434B34",
        duration:0.6,
    })
    gsap.from("#righttwo #two",{
        y:50,
        // opacity:0,
        yoyo:true,
        duration:0.5
    })
})
var tl=gsap.timeline()
tl.to("#full",{
    left:0  ,
    duration:0.6,
})
tl.from("#full h4 ",{
    x:"-60%",
    stagger:0.2,
    opacity:0
})
tl.pause();
var menu=document.querySelector("#left i")
var close=document.querySelector("#full i")
menu.addEventListener("click",function(){
    tl.play();
})
close.addEventListener("click",function(){
    tl.reverse();
})
var icon=document.querySelector("#icon h2 ");
icon.addEventListener("mouseenter",function(){
    gsap.from("#icon h2 ",{
        x:"-80%",
        yoyo:true,
        duration:0.3,
    })
})
var tw=gsap.timeline();
gsap.from("#bottom-left-one",{
    y:"90%",
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom-left-one",
        scrub:2,
        // markers:true,
        start:"top 50%",
        end:"top 60%"
    }
})
gsap.from("#bottom-left-two",{
    x:"-50%",
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom-left-two",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 50%"
    }
})
tw.from("#imgone",{
    y:"50%",
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom-left-two",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 60%"
    }
})
tw.from("#imgtwo",{
    y:"50%",
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom-left-two",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 60%"
    }
})
