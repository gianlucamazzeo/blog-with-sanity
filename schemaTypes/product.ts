import {defineField, defineType, Rule} from 'sanity'


export const product = defineType({
  name: 'product',
  title: 'Prodotto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Link di Affiliazione Amazon',
      type: 'url',
      validation: (Rule:Rule) => Rule.uri({scheme: ['http', 'https']})
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule: Rule) => Rule.required(),
    }),
  ],
})

