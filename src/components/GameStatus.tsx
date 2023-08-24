'use client'

{/* win and lose component */}

let TagComponent = ({name, bgColor}:{name: string, bgColor?: string}) => (
  <div className={`px-5 py-2 border-black rounded bg-[${bgColor ? bgColor : '#FFA500'}]`}>{name}</div>
)

let WinComponent = ({name, title}:{name:string, title:string} ) => (
    <div className={`mx-2 w-full rounded border-2 border-[#008000] bg-[#0B6F27]/[0.4] p-2`}>
          {/* little tag component */}
          <TagComponent name={name} bgColor={'#008000'} />
          <div className="text-center">
            <p className='text-[32px] font-normal'>{title}</p>
          </div>
    </div>
)

let LoseComponent = ({name, title}:{name:string, title:string} ) => (
    <div className={`mx-2 w-full rounded border-2 border-['#FF0000'] bg-['#FF0000']/[0.4] p-2`}>
          {/* little tag component */}
          <TagComponent name={name} bgColor='#FF0000' />
          <div className="text-center">
            <p className='text-[32px] font-normal'>{title}</p>
          </div>
    </div>
)

export const WinAndLose = ({name1, name2}:{name1:string, name2:string} ) => {
    return (
          <div className='border-2 border-black block md:flex p-2 py-4 rounded w-full'>
              {/* win component */}
              <WinComponent title="Win" name={name1} />
              <LoseComponent title="Loses" name={name2} />
              
          </div>
    )
}


export const Draw = ({name1, name2}:{name1:string, name2:string}) => {
    return (
        
          <div className='border-2 border-black block md:flex p-4 rounded my-6'>
              <div className='border-2 border-[#FFA500] bg-[#FFA500]/[0.5] px-12 py-6 block md:flex rounded'>
                  <div><TagComponent name={name1} /></div>
                  <div className="px-3 pt-2">draws with</div>
                  <div><TagComponent name={name2} /></div>
              </div>
          </div>
    )
}

