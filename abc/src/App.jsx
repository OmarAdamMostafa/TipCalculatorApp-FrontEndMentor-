import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const tipButtons = [
    {
      id: '1',
      value: '5',
      type: 'button',
    },
    {
      id: '2',
      value: '10',
      type: 'button',
    },
    {
      id: '3',
      value: '15',
      type: 'button',
    },
    {
      id: '4',
      value: '25',
      type: 'button',
    },
    {
      id: '5',
      value: '50',
      type: 'button',
    },
    // {
    //   id: '6',
    //   type: 'number',
    // },
  ]
  const [windowSize, setWindowSize] = useState()

  const onSubmit = (data) => {
    console.log(data)
  }
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    console.log(windowSize)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize])

  return (
    <div className='w-full h-screen font-spacemono bg-[#c5e4e7]'>
      <div className='flex flex-col justify-start items-center h-[570px] desktop:h-[570px] pt-20'>
        <h1 className='text-[24px] tracking-[0.7rem] text-[#00494d]'>
          SPLI
          <br />
          TTER
        </h1>
        <div className='rounded-3xl bg-white w-full h-screen mt-10 desktop:w-4/5 desktop:h-full xldesktop:w-[45%]'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`items-center ${
                windowSize >= '1024' ? 'flex' : 'flex flex-col justify-center'
              }`}
            >
              <div className='w-5/6 mt-7 desktop:w-full desktop:flex justify-between items-center'>
                <div className='desktop:w-2/5 desktop:ml-12'>
                  {/* BILL */}
                  <label className='text-[#5e7a7d]'>Bill</label>
                  <div className='flex justify-end items-center rounded-md bg-[#f4fafa] relative mt-1 mb-10'>
                    <input
                      type='number'
                      className='text-right bg-transparent focus:bg-transparent w-full 
                        focus:rounded-md focus:outline-[#26c0ab] pr-3 text-[#00494d] text-2xl cursor-pointer desktop:py-2'
                      placeholder='0'
                    />
                    <BiDollar className='absolute left-2 text-[#7f9c9f]' />
                  </div>

                  {/* TIP */}
                  <label className='text-[#5e7a7d]'>Select Tip %</label>
                  <div className='grid grid-cols-2 gap-5 py-2 mb-10  desktop:grid-cols-3'>
                    {tipButtons.map((button) => {
                      return (
                        <input
                          key={button.id}
                          type={button.type}
                          value={button.value + '%'}
                          className={`rounded-md py-2 text-white hover:text-[#00494d] cursor-pointer bg-[#00494d] hover:bg-[#C5E4E7] desktop:text-[24px]`}
                          placeholder={`${button.type == 'number' && 'Custom'}`}
                        />
                      )
                    })}
                    <input
                      type='number'
                      placeholder='Custom'
                      className='bg-[#f4fafa] text-right focus:outline-[#26c0ab] w-full pr-3 placeholder-[#5e7a7d]
                       rounded-md py-2 cursor-pointer text-[#00494d] desktop:text-[20px]'
                    />
                  </div>

                  {/* Number of People */}
                  <label className='text-[#5e7a7d]'>Number of People</label>
                  <div className='flex justify-end items-center rounded-md bg-[#f4fafa] relative mt-1 mb-10'>
                    <input
                      type='number'
                      className='text-right bg-transparent focus:bg-transparent w-full 
                    focus:rounded-md focus:outline-[#26c0ab] pr-3 text-[#00494d] text-2xl cursor-pointer desktop:py-2'
                      placeholder='0'
                    />
                    <BsFillPersonFill className='absolute left-2 text-[#7f9c9f]' />
                  </div>
                </div>

                <div className='w-full desktop:w-[45%] desktop:mr-10'>
                  {/* Summary */}
                  <div className='bg-[#00494d] mb-10 desktop:mb-5 rounded-xl'>
                    <div className='flex flex-col justify-center items-center py-5 desktop:py-7'>
                      <div className='flex flex-col justify-start items-center w-full'>
                        <div className='flex justify-between items-center w-5/6 mt-3 '>
                          <div className='flex flex-col justify-start'>
                            <h1 className='p-0 text-[10px] desktop:text-[14px] text-white'>
                              Tip Amount
                            </h1>
                            <h1 className='text-[8px] desktop:text-[12px] p-0 text-[#5e7a7d]'>
                              / person
                            </h1>
                          </div>
                          <p className='text-xl desktop:text-4xl text-[#26c0ab]'>
                            $4.27
                          </p>
                        </div>
                        <div className='flex justify-between items-center w-5/6 mt-3 desktop:mt-12'>
                          <div className='flex flex-col justify-start'>
                            <h1 className='p-0 text-[10px] desktop:text-[14px] text-white'>
                              Total
                            </h1>
                            <h1 className='text-[8px] desktop:text-[12px] p-0 text-[#5e7a7d]'>
                              / person
                            </h1>
                          </div>
                          <p className='text-xl text-[#26c0ab] desktop:text-4xl'>
                            $32.79
                          </p>
                        </div>
                      </div>

                      <button className='mt-6 desktop:mt-44 w-5/6 bg-[#26c0ab] hover:bg-[#C5E4E7] rounded-sm desktop:rounded-md text-[10px] py-1 desktop:py-4 desktop:text-[24px] text-[#00494d]'>
                        RESET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
