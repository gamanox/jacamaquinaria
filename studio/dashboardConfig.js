export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d781fdba8763d018852ab63',
                  title: 'Sanity Studio',
                  name: 'jacamaquinaria-studio',
                  apiId: 'a5c43ff4-3418-47ad-bbf6-d4d658acc142'
                },
                {
                  buildHookId: '5d781fdb18cece018be05426',
                  title: 'Landing pages Website',
                  name: 'jacamaquinaria',
                  apiId: '727687a0-afa0-4e62-b9e0-cc7984a977e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gamanox/jacamaquinaria',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jacamaquinaria.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
