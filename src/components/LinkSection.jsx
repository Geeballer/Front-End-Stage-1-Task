import React from 'react'

import Link from './Link'

const LinkSection = () => {
  return (
    <div className="link--section">
        <Link 
            linkName = {'Twitter Link'}
            linkSource = {'https://twitter.com/cascadingGeek'}
        />
        <Link 
            linkName = {'Zuri Team'}
            linkSource = {'https://training.zuri.team/'}
            linkId='btn__zuri'
        />
        <Link 
            linkName = {'Zuri Books'}
            linkSource = {'http://books.zuri.team'}
            linkId='books'
        />
        <Link 
            linkName = {'Python Books'}
            linkSource = {'http://books.zuri.team/python-for-beginners?ref_id=<jayBee>'}
            linkId='book__python'
        />
        <Link 
            linkName = {'Background Check for Coders'}
            linkSource = {'https://background.zuri.team'}
            linkId='pitch'
        />
        <Link 
            linkName = {'Design Books'}
            linkSource = {'https://books.zuri.team/design-rules'}
            linkId='book__design'
        />
    </div>
  )
}

export default LinkSection