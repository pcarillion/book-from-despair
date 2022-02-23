const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
    query{
        chapters:allContentfulChapter{
            edges{
                node{
                    url
        }}}
        parts: allContentfulPart{
            edges{
              node{
                url
              }
            }
          }
      }
    `)



    data.chapters.edges.forEach(({node}) =>{
        createPage({
            path: `${node.url}`,
            component: path.resolve("./src/templates/Text.js"),
            context:{
                url: node.url,
            }
        })
    })

    data.parts.edges.forEach(({node}) =>{
        createPage({
            path: `${node.url}`,
            component: path.resolve("./src/templates/Intros.js"),
            context:{
                url: node.url,
            }
        })
    })


}