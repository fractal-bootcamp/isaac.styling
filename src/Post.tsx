import { react } from 'react';
import './App.css'
import classNames from 'classnames'
import { Heart, MessageSquare } from 'lucide-react'


function Post() {
    return (

        <div className='flex flex-row gap-4'>
            <img className='rounded-full self-start' src="https://placehold.co/50x50" alt="pfp" />
            <div className='flex flex-col items-start'>
                <div className="">
                    <div className="flex font-bold">Helena <span className='text-gray-400 font-medium'>&nbsp;in Group name</span></div>
                </div>
                <div className="">
                    <div className="flex text-gray-500 pb-2.5">3 minutes ago</div>
                </div>
                <img className='rounded-lg w-full' src="https://picsum.photos/id/430/400/400" alt="Placeholder image" />
                <div className="py-2.5">Post Description</div>
                <div className='flex flex-row gap-[0.375rem] items-center'>
                    <Heart className='w-[1.4em] h-[1.4em]' />
                    <span>21 likes</span>
                    <div className='mx-1'></div>
                    <MessageSquare className='w-[1.4em] h-[1.4em]' />
                    <span>4 comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post