const tasks = [
    {
        id: "task-1",
        content: "Finish this GOSH DARN assignment"
    },
    {
        id: "task-2",
        content: "Figure out what I am doing"
    },
    {
        id: "task-3",
        content: "Cry a lot"
    }
];

const data = {
    lists: {
        "list-1" : {
            id: "list-1",
            title: "To do",
            tasks,
        },
        
    },
    listIds: ["list-1"]
};

export default data;