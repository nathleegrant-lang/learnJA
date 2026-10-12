/* =====================================================================
   LIBRARY CATALOG - edit this file to add lessons to the hub.
   Add one entry to LESSONS for each lesson file in the lessons/ folder.
   status: 'ready' (students can open it) or 'planned' (shows as coming soon)
   ===================================================================== */
window.SITE={
 name:'LearnJA High School',
 tagline:'Interactive lessons for Grades 7 to 11 | NSC and CSEC',
 grades:[
  {n:7,level:'NSC',note:'Lower school'},
  {n:8,level:'NSC',note:'Lower school'},
  {n:9,level:'NSC',note:'Lower school'},
  {n:10,level:'CSEC',note:'CSEC preparation'},
  {n:11,level:'CSEC',note:'CSEC examination year'}
 ],
 terms:[
  {n:1,name:'Term 1',when:'September to December'},
  {n:2,name:'Term 2',when:'January to Easter'},
  {n:3,name:'Term 3',when:'After Easter to July'}
 ],
 subjects:[
  {id:'maths',name:'Mathematics',ready:true},
  {id:'english',name:'English Language',ready:false},
  {id:'science',name:'Science',ready:false},
  {id:'social',name:'Social Studies',ready:false}
 ]
};

window.LESSONS=[
 {id:'g7-t1-maths-integers',grade:7,term:1,subject:'maths',strand:'Number',title:'Integers: Above and Below Zero',file:'lessons/g7-t1-integers.html',minutes:60,status:'ready'},
 {id:'g7-t1-maths-lines-angles',grade:7,term:1,subject:'maths',strand:'Geometry',title:'Lines and Angles',file:'lessons/g7-t1-lines-angles.html',minutes:70,status:'ready',progressKey:'g7-lines-angles-lab-v2',total:15}
];
