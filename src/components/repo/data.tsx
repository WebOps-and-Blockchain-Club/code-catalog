
interface Repo {
    repoName: String,
    parentOrganisation: String,
    Contributors: String[]
}

const Data: Repo[] = [
    {
        repoName: 'Repo1',
        parentOrganisation: 'ParentOrg',
        Contributors: ['User1', 'User2', 'User3']
    },
    {
        repoName: 'Repo2',
        parentOrganisation: 'ParentOrg of Repo2' ,
        Contributors: ['User1','User2','User3','User4']
    }
]

export default Data;