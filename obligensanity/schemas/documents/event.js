const event = {
    title: 'Event', 
    name: 'event',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            description: 'Beskrivelse av tittel',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Dette er den unike url-en',
            validation: (Rule) => Rule.required(),
            options:{
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'preAmble',
            type: 'text',
            title: 'En ingress',
            description: 'Beskrivelse av ingressen',

        },
        {
            title: 'Kategori',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}]
          }
    ]
}

export default event;