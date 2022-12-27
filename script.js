
//Assignment 4(Day 4)

let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.onload=function(){
  if(xhr.status>=200 && xhr.status<300)
  {
    let obj=JSON.parse(this.response);
    //console.log(obj);

    //Q2)Use the rest countries API URL and display all the country flags in the console

    for(i=0;i<obj.length;i++)
    {
      console.log(obj[i].flags);
    }
    console.log("\n")

    //Q3) Use the same Rest countries and print all the countries names,regions,sub-regions and population

    for(i=0;i<obj.length;i++)
    {
      console.log(`
      Name:${obj[i].name}
      SubRegion:${obj[i].subregion}
      Region:${obj[i].region}
      Population:${obj[i].population}`);
    }
  }
}
xhr.send();

// Q1) How to Compare two JSON have the same properties without order?

let obj1={fname:"Person1",age:5};
let obj2={age:5,fname:"Person1"};
//Using lodash 
let question1=_.isEqual(obj1, obj2); 
//Using logic
let question=JSON.stringify(obj1) == JSON.stringify(obj2);
console.log("\n",question)
console.log("\n",question1)

/*
OUTPUT q1)

false
 true
*/

/*
OUTPUT q2)

{svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg', png: 'https://upload.wikimedia.org/wikipedia/commons/thu…the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'}
script.js:16 {svg: 'https://flagcdn.com/ax.svg', png: 'https://flagcdn.com/w320/ax.png'}
script.js:16 {svg: 'https://flagcdn.com/al.svg', png: 'https://flagcdn.com/w320/al.png'}
script.js:16 {svg: 'https://flagcdn.com/dz.svg', png: 'https://flagcdn.com/w320/dz.png'}
script.js:16 {svg: 'https://flagcdn.com/as.svg', png: 'https://flagcdn.com/w320/as.png'}
script.js:16 {svg: 'https://flagcdn.com/ad.svg', png: 'https://flagcdn.com/w320/ad.png'}
script.js:16 {svg: 'https://flagcdn.com/ao.svg', png: 'https://flagcdn.com/w320/ao.png'}
script.js:16 {svg: 'https://flagcdn.com/ai.svg', png: 'https://flagcdn.com/w320/ai.png'}
script.js:16 {svg: 'https://flagcdn.com/aq.svg', png: 'https://flagcdn.com/w320/aq.png'}
script.js:16 {svg: 'https://flagcdn.com/ag.svg', png: 'https://flagcdn.com/w320/ag.png'}
script.js:16 {svg: 'https://flagcdn.com/ar.svg', png: 'https://flagcdn.com/w320/ar.png'}png: "https://flagcdn.com/w320/ar.png"svg: "https://flagcdn.com/ar.svg"[[Prototype]]: Object
script.js:16 {svg: 'https://flagcdn.com/am.svg', png: 'https://flagcdn.com/w320/am.png'}
script.js:16 {svg: 'https://flagcdn.com/aw.svg', png: 'https://flagcdn.com/w320/aw.png'}
script.js:16 {svg: 'https://flagcdn.com/au.svg', png: 'https://flagcdn.com/w320/au.png'}
script.js:16 {svg: 'https://flagcdn.com/at.svg', png: 'https://flagcdn.com/w320/at.png'}
script.js:16 {svg: 'https://flagcdn.com/az.svg', png: 'https://flagcdn.com/w320/az.png'}
script.js:16 {svg: 'https://flagcdn.com/bs.svg', png: 'https://flagcdn.com/w320/bs.png'}
script.js:16 {svg: 'https://flagcdn.com/bh.svg', png: 'https://flagcdn.com/w320/bh.png'}
script.js:16 {svg: 'https://flagcdn.com/bd.svg', png: 'https://flagcdn.com/w320/bd.png'}
script.js:16 {svg: 'https://flagcdn.com/bb.svg', png: 'https://flagcdn.com/w320/bb.png'}
script.js:16 {svg: 'https://flagcdn.com/by.svg', png: 'https://flagcdn.com/w320/by.png'}
script.js:16 {svg: 'https://flagcdn.com/be.svg', png: 'https://flagcdn.com/w320/be.png'}
script.js:16 {svg: 'https://flagcdn.com/bz.svg', png: 'https://flagcdn.com/w320/bz.png'}
script.js:16 {svg: 'https://flagcdn.com/bj.svg', png: 'https://flagcdn.com/w320/bj.png'}
script.js:16 {svg: 'https://flagcdn.com/bm.svg', png: 'https://flagcdn.com/w320/bm.png'}
script.js:16 {svg: 'https://flagcdn.com/bt.svg', png: 'https://flagcdn.com/w320/bt.png'}
script.js:16 {svg: 'https://flagcdn.com/bo.svg', png: 'https://flagcdn.com/w320/bo.png'}
script.js:16 {svg: 'https://flagcdn.com/bq.svg', png: 'https://flagcdn.com/w320/bq.png'}
script.js:16 {svg: 'https://flagcdn.com/ba.svg', png: 'https://flagcdn.com/w320/ba.png'}
script.js:16 {svg: 'https://flagcdn.com/bw.svg', png: 'https://flagcdn.com/w320/bw.png'}
script.js:16 {svg: 'https://flagcdn.com/bv.svg', png: 'https://flagcdn.com/w320/bv.png'}
script.js:16 {svg: 'https://flagcdn.com/br.svg', png: 'https://flagcdn.com/w320/br.png'}
script.js:16 {svg: 'https://flagcdn.com/io.svg', png: 'https://flagcdn.com/w320/io.png'}
script.js:16 {svg: 'https://flagcdn.com/um.svg', png: 'https://flagcdn.com/w320/um.png'}
script.js:16 {svg: 'https://flagcdn.com/vg.svg', png: 'https://flagcdn.com/w320/vg.png'}
script.js:16 {svg: 'https://flagcdn.com/vi.svg', png: 'https://flagcdn.com/w320/vi.png'}
script.js:16 {svg: 'https://flagcdn.com/bn.svg', png: 'https://flagcdn.com/w320/bn.png'}
script.js:16 {svg: 'https://flagcdn.com/bg.svg', png: 'https://flagcdn.com/w320/bg.png'}
script.js:16 {svg: 'https://flagcdn.com/bf.svg', png: 'https://flagcdn.com/w320/bf.png'}
script.js:16 {svg: 'https://flagcdn.com/bi.svg', png: 'https://flagcdn.com/w320/bi.png'}
script.js:16 {svg: 'https://flagcdn.com/kh.svg', png: 'https://flagcdn.com/w320/kh.png'}
script.js:16 {svg: 'https://flagcdn.com/cm.svg', png: 'https://flagcdn.com/w320/cm.png'}
script.js:16 {svg: 'https://flagcdn.com/ca.svg', png: 'https://flagcdn.com/w320/ca.png'}
script.js:16 {svg: 'https://flagcdn.com/cv.svg', png: 'https://flagcdn.com/w320/cv.png'}
script.js:16 {svg: 'https://flagcdn.com/ky.svg', png: 'https://flagcdn.com/w320/ky.png'}
script.js:16 {svg: 'https://flagcdn.com/cf.svg', png: 'https://flagcdn.com/w320/cf.png'}
script.js:16 {svg: 'https://flagcdn.com/td.svg', png: 'https://flagcdn.com/w320/td.png'}
script.js:16 {svg: 'https://flagcdn.com/cl.svg', png: 'https://flagcdn.com/w320/cl.png'}
script.js:16 {svg: 'https://flagcdn.com/cn.svg', png: 'https://flagcdn.com/w320/cn.png'}
script.js:16 {svg: 'https://flagcdn.com/cx.svg', png: 'https://flagcdn.com/w320/cx.png'}
script.js:16 {svg: 'https://flagcdn.com/cc.svg', png: 'https://flagcdn.com/w320/cc.png'}
script.js:16 {svg: 'https://flagcdn.com/co.svg', png: 'https://flagcdn.com/w320/co.png'}
script.js:16 {svg: 'https://flagcdn.com/km.svg', png: 'https://flagcdn.com/w320/km.png'}
script.js:16 {svg: 'https://flagcdn.com/cg.svg', png: 'https://flagcdn.com/w320/cg.png'}
script.js:16 {svg: 'https://flagcdn.com/cd.svg', png: 'https://flagcdn.com/w320/cd.png'}
script.js:16 {svg: 'https://flagcdn.com/ck.svg', png: 'https://flagcdn.com/w320/ck.png'}
script.js:16 {svg: 'https://flagcdn.com/cr.svg', png: 'https://flagcdn.com/w320/cr.png'}
script.js:16 {svg: 'https://flagcdn.com/hr.svg', png: 'https://flagcdn.com/w320/hr.png'}
script.js:16 {svg: 'https://flagcdn.com/cu.svg', png: 'https://flagcdn.com/w320/cu.png'}
script.js:16 {svg: 'https://flagcdn.com/cw.svg', png: 'https://flagcdn.com/w320/cw.png'}
script.js:16 {svg: 'https://flagcdn.com/cy.svg', png: 'https://flagcdn.com/w320/cy.png'}
script.js:16 {svg: 'https://flagcdn.com/cz.svg', png: 'https://flagcdn.com/w320/cz.png'}
script.js:16 {svg: 'https://flagcdn.com/dk.svg', png: 'https://flagcdn.com/w320/dk.png'}
script.js:16 {svg: 'https://flagcdn.com/dj.svg', png: 'https://flagcdn.com/w320/dj.png'}
script.js:16 {svg: 'https://flagcdn.com/dm.svg', png: 'https://flagcdn.com/w320/dm.png'}
script.js:16 {svg: 'https://flagcdn.com/do.svg', png: 'https://flagcdn.com/w320/do.png'}
script.js:16 {svg: 'https://flagcdn.com/ec.svg', png: 'https://flagcdn.com/w320/ec.png'}
script.js:16 {svg: 'https://flagcdn.com/eg.svg', png: 'https://flagcdn.com/w320/eg.png'}
script.js:16 {svg: 'https://flagcdn.com/sv.svg', png: 'https://flagcdn.com/w320/sv.png'}
script.js:16 {svg: 'https://flagcdn.com/gq.svg', png: 'https://flagcdn.com/w320/gq.png'}
script.js:16 {svg: 'https://flagcdn.com/er.svg', png: 'https://flagcdn.com/w320/er.png'}
script.js:16 {svg: 'https://flagcdn.com/ee.svg', png: 'https://flagcdn.com/w320/ee.png'}
script.js:16 {svg: 'https://flagcdn.com/et.svg', png: 'https://flagcdn.com/w320/et.png'}
script.js:16 {svg: 'https://flagcdn.com/fk.svg', png: 'https://flagcdn.com/w320/fk.png'}
script.js:16 {svg: 'https://flagcdn.com/fo.svg', png: 'https://flagcdn.com/w320/fo.png'}
script.js:16 {svg: 'https://flagcdn.com/fj.svg', png: 'https://flagcdn.com/w320/fj.png'}
script.js:16 {svg: 'https://flagcdn.com/fi.svg', png: 'https://flagcdn.com/w320/fi.png'}
script.js:16 {svg: 'https://flagcdn.com/fr.svg', png: 'https://flagcdn.com/w320/fr.png'}
script.js:16 {svg: 'https://flagcdn.com/gf.svg', png: 'https://flagcdn.com/w320/gf.png'}
script.js:16 {svg: 'https://flagcdn.com/pf.svg', png: 'https://flagcdn.com/w320/pf.png'}
script.js:16 {svg: 'https://flagcdn.com/tf.svg', png: 'https://flagcdn.com/w320/tf.png'}
script.js:16 {svg: 'https://flagcdn.com/ga.svg', png: 'https://flagcdn.com/w320/ga.png'}
script.js:16 {svg: 'https://flagcdn.com/gm.svg', png: 'https://flagcdn.com/w320/gm.png'}
script.js:16 {svg: 'https://flagcdn.com/ge.svg', png: 'https://flagcdn.com/w320/ge.png'}
script.js:16 {svg: 'https://flagcdn.com/de.svg', png: 'https://flagcdn.com/w320/de.png'}
script.js:16 {svg: 'https://flagcdn.com/gh.svg', png: 'https://flagcdn.com/w320/gh.png'}
script.js:16 {svg: 'https://flagcdn.com/gi.svg', png: 'https://flagcdn.com/w320/gi.png'}
script.js:16 {svg: 'https://flagcdn.com/gr.svg', png: 'https://flagcdn.com/w320/gr.png'}
script.js:16 {svg: 'https://flagcdn.com/gl.svg', png: 'https://flagcdn.com/w320/gl.png'}
script.js:16 {svg: 'https://flagcdn.com/gd.svg', png: 'https://flagcdn.com/w320/gd.png'}
script.js:16 {svg: 'https://flagcdn.com/gp.svg', png: 'https://flagcdn.com/w320/gp.png'}

*/

/*
OUTPUT 3)
Name:Afghanistan
      SubRegion:Southern Asia
      Region:Asia
      Population:40218234
script.js:24 
      Name:Åland Islands
      SubRegion:Northern Europe
      Region:Europe
      Population:28875
script.js:24 
      Name:Albania
      SubRegion:Southern Europe
      Region:Europe
      Population:2837743
script.js:24 
      Name:Algeria
      SubRegion:Northern Africa
      Region:Africa
      Population:44700000
script.js:24 
      Name:American Samoa
      SubRegion:Polynesia
      Region:Oceania
      Population:55197
script.js:24 
      Name:Andorra
      SubRegion:Southern Europe
      Region:Europe
      Population:77265
script.js:24 
      Name:Angola
      SubRegion:Middle Africa
      Region:Africa
      Population:32866268
script.js:24 
      Name:Anguilla
      SubRegion:Caribbean
      Region:Americas
      Population:13452
script.js:24 
      Name:Antarctica
      SubRegion:Antarctica
      Region:Polar
      Population:1000
script.js:24 
      Name:Antigua and Barbuda
      SubRegion:Caribbean
      Region:Americas
      Population:97928
script.js:24 
      Name:Argentina
      SubRegion:South America
      Region:Americas
      Population:45376763
script.js:24 
      Name:Armenia
      SubRegion:Western Asia
      Region:Asia
      Population:2963234
script.js:24 
      Name:Aruba
      SubRegion:Caribbean
      Region:Americas
      Population:106766
script.js:24 
      Name:Australia
      SubRegion:Australia and New Zealand
      Region:Oceania
      Population:25687041
script.js:24 
      Name:Austria
      SubRegion:Central Europe
      Region:Europe
      Population:8917205
script.js:24 
      Name:Azerbaijan
      SubRegion:Western Asia
      Region:Asia
      Population:10110116
script.js:24 
      Name:Bahamas
      SubRegion:Caribbean
      Region:Americas
      Population:393248
script.js:24 
      Name:Bahrain
      SubRegion:Western Asia
      Region:Asia
      Population:1701583
script.js:24 
      Name:Bangladesh
      SubRegion:Southern Asia
      Region:Asia
      Population:164689383
script.js:24 
      Name:Barbados
      SubRegion:Caribbean
      Region:Americas
      Population:287371
script.js:24 
      Name:Belarus
      SubRegion:Eastern Europe
      Region:Europe
      Population:9398861
script.js:24 
      Name:Belgium
      SubRegion:Western Europe
      Region:Europe
      Population:11555997
script.js:24 
      Name:Belize
      SubRegion:Central America
      Region:Americas
      Population:397621
script.js:24 
      Name:Benin
      SubRegion:Western Africa
      Region:Africa
      Population:12123198
script.js:24 
      Name:Bermuda
      SubRegion:Northern America
      Region:Americas
      Population:63903
script.js:24 
      Name:Bhutan
      SubRegion:Southern Asia
      Region:Asia
      Population:771612
script.js:24 
      Name:Bolivia (Plurinational State of)
      SubRegion:South America
      Region:Americas
      Population:11673029
script.js:24 
      Name:Bonaire, Sint Eustatius and Saba
      SubRegion:Caribbean
      Region:Americas
      Population:17408
script.js:24 
      Name:Bosnia and Herzegovina
      SubRegion:Southern Europe
      Region:Europe
      Population:3280815
script.js:24 
      Name:Botswana
      SubRegion:Southern Africa
      Region:Africa
      Population:2351625
script.js:24 
      Name:Bouvet Island
      SubRegion:South Antarctic Ocean
      Region:Antarctic Ocean
      Population:0
script.js:24 
      Name:Brazil
      SubRegion:South America
      Region:Americas
      Population:212559409
script.js:24 
      Name:British Indian Ocean Territory
      SubRegion:Eastern Africa
      Region:Africa
      Population:3000
script.js:24 
      Name:United States Minor Outlying Islands
      SubRegion:Northern America
      Region:Americas
      Population:300
script.js:24 
      Name:Virgin Islands (British)
      SubRegion:Caribbean
      Region:Americas
      Population:30237
script.js:24 
      Name:Virgin Islands (U.S.)
      SubRegion:Caribbean
      Region:Americas
      Population:106290
script.js:24 
      Name:Brunei Darussalam
      SubRegion:South-Eastern Asia
      Region:Asia
      Population:437483
script.js:24 
      Name:Bulgaria
      SubRegion:Eastern Europe
      Region:Europe
      Population:6927288
script.js:24 
      Name:Burkina Faso
      SubRegion:Western Africa
      Region:Africa
      Population:20903278
script.js:24 
      Name:Burundi
      SubRegion:Eastern Africa
      Region:Africa
      Population:11890781
script.js:24 
      Name:Cambodia
      SubRegion:South-Eastern Asia
      Region:Asia
      Population:16718971
script.js:24 
      Name:Cameroon
      SubRegion:Middle Africa
      Region:Africa
      Population:26545864
script.js:24 
      Name:Canada
      SubRegion:Northern America
      Region:Americas
      Population:38005238
script.js:24 
      Name:Cabo Verde
      SubRegion:Western Africa
      Region:Africa
      Population:555988
script.js:24 
      Name:Cayman Islands
      SubRegion:Caribbean
      Region:Americas
      Population:65720
script.js:24 
      Name:Central African Republic
      SubRegion:Middle Africa
      Region:Africa
      Population:4829764
script.js:24 
      Name:Chad
      SubRegion:Middle Africa
      Region:Africa
      Population:16425859
script.js:24 
      Name:Chile
      SubRegion:South America
      Region:Americas
      Population:19116209
script.js:24 

*/