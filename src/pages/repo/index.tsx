import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Data from './data';
import './RepoPage.css';


interface Repo {
  repoName: String,
  parentOrganisation: String,
  Contributors: String[],
  show: boolean,
}

const Repo = () => {
  const [Repos, setRepos] = useState<Repo[]>([]);
  const fetchRepos = () => {
    axios.get('api/get-repos')
      .then((res) => {
        const response: Array<Repo> = res.data.map((ele: any) => ({ ...ele, show: true }));
        setRepos(response);
      })
  }

  const change_show = (repoName: String) => {
    Repos.map(data => {
      if (data.repoName === repoName) {
        data.show = !data.show;
      }
    })
    setRepos([...Repos]);
  }

  useEffect(() => {
    fetchRepos();
  }, [])

  return (
    <div className='ele'>
      <div className='title'>Your Repos</div>
      <div className='all-repos'>
        {Repos.map((repo, index) => (
          <>
            <div className='base' key={index}>
              <h2 className='repoName'>{repo.repoName}</h2>
              <div className='dropdown' onClick={() => { change_show(repo.repoName) }}>V</div>
            </div>
            {repo.show && (
              <>
                <div className='details'>
                  <h3 className='org'>
                    <span className='org-label'>Organisation:</span> {repo.parentOrganisation}
                  </h3>
                  <div>
                    <h3 className='cont'>Contributors:</h3>
                    <div className='users'>
                      {repo.Contributors.map(user => (
                        <h5 className='user'>{user}</h5>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default Repo;