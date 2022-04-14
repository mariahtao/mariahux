export default {
    name: 'contents',
    title: 'Contents',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'projectContent',
        title: 'Project Content',
        type: 'array',
        of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
      },
    ],
    preview: {
      select: {
        name: 'title',
      },
      prepare: ({ name }) => ({
        title: name,
      }),
    },
  };