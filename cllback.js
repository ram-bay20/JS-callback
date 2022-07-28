const blogs =[
     {title:'Cinematic' , body:'Marvel Cinematic Universe announced all projects of phase 5 which contains thanos level threats like secret wars and multiverse saga.'},
     {title:'Sports' , body:'India won the ODI series against West Indies with 3-0 lead as Subhman  Gill becoming player of the series.'}
];

function getBlog(){
     setTimeout(()=>{
          let output = '';
          blogs.forEach((blog,index)=>{
               output += `<h3> ${blog.title}:</h3><p style= "font-style:italic;"> ${blog.body} </p>`;
               
          });
          document.body.innerHTML = output;
          document.body.style.fontFamily = 'Arial,Helvetica,sans-serif';
          document.body.style.fontSize = '20px';
          document.body.style.color = '#00ffdd';
          document.body.style.background = '#777';
     },1000);
}

function createBlog(blog,callback){
     setTimeout(()=>{
          blogs.push(blog);
          callback();
     },2000);
}

createBlog({title: 'Politics' , body: 'I dont take intrest in this bloody politics. So I dont knoe anything about it.'}, getBlog);