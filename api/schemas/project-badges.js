export default {
  name: 'projectBadges',
  title: 'Project Badges',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'badge',
    },
    prepare: ({ name }) => ({
      title: name,
    }),
  },
};