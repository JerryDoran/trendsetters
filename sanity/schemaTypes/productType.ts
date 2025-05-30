import { TrolleyIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Product Intro',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Product Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Trending', value: 'trending' },
          { title: 'Sale', value: 'sale' },
        ],
      },
    }),
    defineField({
      name: 'variant',
      title: 'Product Variant',
      type: 'string',
      options: {
        list: [
          { title: 'T-shirt', value: 'tshirt' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Pants', value: 'pants' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Shorts', value: 'shorts' },
          { title: 'Others', value: 'others' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      const image = media && media[0];
      return {
        title: title,
        media: image,
        subtitle: `${subtitle}`,
      };
    },
  },
});
