const tasks = [
    {
        id: "task-1",
        content: "Edit list title"
    },
    {
        id: "task-2",
        content: "Complete tasks/Delete tasks, Lists"
    },
    {
        id: "task-3",
        content: "Connect to DB"
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