const fs = require('fs')
const path = require('path')
const { Feed } = require('feed')
const { load } = require('./posts.data')
const url = `https://blog.vuejs.org`

const feed = new Feed({
  title: 'Blog of Jonas Bandi',
  description: "Jonas' occasional brain dumps.",
  id: url,
  link: url,
  language: 'en',
  image: 'https://blog.jonasbandi.net/jb.png',
  favicon: `${url}/favicon.ico`,
  copyright: 'Copyright (c) 2021-present, Jonas Bandi'
})

load(true).forEach((post) => {
  const file = path.resolve(__dirname, `dist${post.href}`)
  const rendered = fs.readFileSync(file, 'utf-8')
  const content = rendered.match(
    /<div [^<>]+?class="prose[^<>]+?>([\s\S]*)<\/div><\/div><footer/
  )

  feed.addItem({
    title: post.title,
    id: `${url}${post.href}`,
    link: `${url}${post.href}`,
    description: post.excerpt,
    content: content[1],
    author: [
      {
        name: post.data.author,
        link: post.data.twitter
          ? `https://twitter.com/@jbandi`
          : undefined
      }
    ],
    date: post.data.date
  })
})

fs.writeFileSync(path.resolve(__dirname, 'dist/feed.rss'), feed.rss2())
