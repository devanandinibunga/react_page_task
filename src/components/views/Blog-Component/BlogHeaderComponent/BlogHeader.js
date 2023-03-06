import React from 'react'

export const BlogHeader = () => {
  return (
    <div className='header-component-container'>
        <h1 className='header-component-header'>
            React Labs: What We've Been Working On – June 2022
        </h1>
        <p>
            June 15, 2022 by <a href='/' className='header-component-list-anchor'>Andrew Clark</a>, 
            <a href='/' className='header-component-list-anchor'>Dan Abramov</a>, 
            <a href='/' className='header-component-list-anchor'>Jan Kassens</a>, 
            <a href='/' className='header-component-list-anchor'>Joseph Savona</a>, 
            <a href='/' className='header-component-list-anchor'>Josh Story</a>, 
            <a href='/' className='header-component-list-anchor'>Lauren Tan</a>, 
            <a href='/' className='header-component-list-anchor'>Luna Ruan</a>, 
            <a href='/' className='header-component-list-anchor'>Mengdi Chen</a>, 
            <a href='/' className='header-component-list-anchor'>Rick Hanlon</a>, 
            <a href='/' className='header-component-list-anchor'>Robert Zhang</a>, 
            <a href='/' className='header-component-list-anchor'>Sathya Gunasekaran</a>, 
            <a href='/' className='header-component-list-anchor'>Sebastian Markbåge</a>, 
            and <a href='/' className='header-component-list-anchor'>Xuan Huang</a>
        </p>
        <p className='header-component-description'>
          <a href='/' className='header-component-list-anchor'>React 18 </a> 
          was years in the making, and with it brought 
          valuable lessons for the React team. Its release was the result of 
          many years of research and exploring many paths. Some of those paths were 
          successful; many more were dead-ends that led to new insights. One lesson 
          we’ve learned is that it’s frustrating for the community to wait for new 
          features without having insight into these paths that we’re exploring.
        </p>
        <p>
        We typically have a number of projects being worked on at any time, ranging 
        from the more experimental to the clearly defined. Looking ahead, we’d like 
        to start regularly sharing more about what we’ve been working on with the 
        community across these projects.
        </p>
        <p>
        To set expectations, this is not a roadmap with clear timelines. Many of these 
        projects are under active research and are difficult to put concrete ship dates on. 
        They may possibly never even ship in their current iteration depending on what we 
        learn. Instead, we want to share with you the problem spaces we’re actively thinking 
        about, and what we’ve learned so far.
        </p>
        <hr/>
    </div>
  )
}
