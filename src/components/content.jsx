import React from 'react';
import clasess from './content.module.css';

const Content = () => {
  return(
    <div className={clasess.content}>
      <div><img src='https://th.bing.com/th/id/OIP.9zbwKasUyCED0h1NrNe51gHaDt?pid=ImgDet&rs=1'/>
      </div>
      <div><img src='https://th.bing.com/th/id/OIP.kiM0n8SNvBKKnSPRUKOfxgHaHa?pid=ImgDet&w=164.50632911392404&h=180&c=7&dpr=1.25'/>
      </div>
      <div> My post
        <div>New post
        </div>
        <div className={clasess.post}>
          <div className={clasess.item}>Post1</div>
          <div className={clasess.item}>Post2</div>
        </div>
      </div>
    </div>      
  )
}

export default Content