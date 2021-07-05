export const GET_HOME_QUERY = `{
              hero: entries(section: [home]) {
                ... on Home {
                  backgroundImage {
                    url
                  }
                  heading
                  shortDescription
                }
              }
              projects: entries(section: [projects]) {
                ... on Projects {
                  thumbnail {
                    url
                  }
                  title
                  richText {
                    content
                  }
                }
              }
              socialLinks: globals {
                socialLinks {
                  github
                  linkedin
                  instagram
                }
              }
            }`