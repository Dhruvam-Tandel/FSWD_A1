const tasks=[{title:"Drinking",status:"Completed",priority:3},
    {title:"Dancing",status:"Pending",priority:2},
    {title:"Eating",status:"Pending",priority:1},
    {title:"Sleeping",status:"Completed",priority:4},
];

const addtask=(alltasks,task)=>{
    alltasks.push(task);
};

addtask(tasks,{title:"Eating",status:"Pending",priority:5});
console.log(tasks);

const basedonstatus =(alltasks,st)=>{
    return alltasks.filter(task=>task.status===st);
};
console.log(basedonstatus(tasks,"Pending"));

const highprority = (alltasks)=>{
    return alltasks.reduce((high_prority,task)=>{ return high_prority.priority > task.priority ? high_prority : task});
};
console.log(highprority(tasks));

const mapping=(alltasks)=>{
    return alltasks.map(task=>({title:task.title ,status:task.status}));
};
console.log(mapping(tasks));

tasks.forEach(task => {
    console.log(` ${task.title} is ${task.status} and prority is ${task.priority}`);
});
