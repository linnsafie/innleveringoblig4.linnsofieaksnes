const movie = {
    name: 'movie',
    title: 'Movie', 
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
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}],
            description: 'Beskrivelse av skuespiller',

        }
    ]
}

export default movie;