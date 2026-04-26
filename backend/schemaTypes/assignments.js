const assignments = {
    name: "assignments",
    title: "Assignments",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Overskrift",
            type: "string",
        },
        {
            name: "content",
            title: "Innhold",
            type: "text",
        },
    ],
    preview: {
        select: {
            title: "title",
        },
    }, 
}  

export default assignments