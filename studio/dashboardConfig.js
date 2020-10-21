export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f905fbc0a79c300da85822d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-335ptzwo',
                  apiId: 'ba8d5d2a-29aa-4c37-8123-6ff02235749e'
                },
                {
                  buildHookId: '5f905fbc35340c0139a5e403',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4u4abf1j',
                  apiId: '21822869-c2e8-4097-9184-07ffd01561aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acifuentes83/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4u4abf1j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
