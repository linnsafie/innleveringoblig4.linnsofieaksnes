const category ={
    title: 'Kategori', 
    name: 'category',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Kategori',
            description: 'Navnet på kategorien beskrivelse',
            validation: (Rule) => Rule.required(),
        },
    ]
}

export default category;