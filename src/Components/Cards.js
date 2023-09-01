import React from 'react'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'

const Cards = () => {
  return (
    <div>
       <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
     
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
        Development
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
        By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write.
        </p>
      </p>
      <Button>
        <p>
          Read more
        </p>
      </Button>
    </Card>
    </div>
  )
}

export default Cards
