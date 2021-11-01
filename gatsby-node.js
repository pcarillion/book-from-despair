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
        intros: allContentfulIntros{
            edges{
              node{
                url
                type
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

    data.intros.edges.forEach(({node}) =>{
        createPage({
            path: `${node.url}`,
            component: path.resolve("./src/templates/Intros.js"),
            context:{
                type: node.type,
            }
        })
    })


}