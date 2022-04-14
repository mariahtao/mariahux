export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'projectTags' }] }],
      },
      {
        name: 'badges',
        title: 'Badges',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'projectBadges' }] }],
      },
    ],
    preview: {
      select: {
        title: 'title',
        badge0: 'badges.0.name',
        badge1: 'badges.1.name',
        badge2: 'badges.2.name',
        tag0: 'tags.0.name',
        tag1: 'tags.1.name',
        tag2: 'tags.2.name',
      },
      prepare: ({ title }) => ({ title }),
    },
  };