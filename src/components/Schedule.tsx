import React from 'react';

export const Schedule = () => (
  <div
    className='flex grow h-72 sm:h-96 w-full overflow-x-scroll max-w-[calc(100vw-32px)] rounded-lg'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,o_50/v1696165783/turny_kick_j5zrst.jpg)',
    }}
  >
    <div className='flex h-full w-full p-4 pb-8 min-w-[650px] min-h-[450px] sm:min-h-[300px] items-center justify-start bg-black/50 rounded-lg'>
      <table
        aria-label='class schedule'
        className='h-full w-full rounded-lg text-white'

      >
        <caption className='text-sm sm:text-md md:text-base underline mb-1 pt-8 mx-auto'>SCHEDULE</caption>
        <tr className='text-xs'>
          <th className='text-end' scope="col">WEEK DAY</th>
          <th scope="col">
            <p>HAP KI DO</p>
            <p>(ages 10+)</p>
          </th>
          <th scope="col">
            <p>TAE KWON DO</p>
            <p>Adults</p>
          </th>
          <th scope="col">
            <p>TAE KWON DO</p>
            <p>Kids (ages 5-12)</p>
          </th>
          <th scope="col">
            <p>KICK BOXING</p>
            <p>Adults</p>
          </th>
          <th scope="col">
            <p>KICK BOXING</p>
            <p>Kids (ages 8-12)</p>
          </th>
          <th scope="col">
            <p>TODDLERS</p>
            <p>(ages 3-4)</p>
          </th>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">MONDAY</th>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>7:30pm - 8:30pm</td>
          <td className='text-center p-1'>6:15pm - 7:15pm</td>
          <td className='text-center p-1'>5:00pm - 6:00pm</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">TUESDAY</th>
          <td className='text-center p-1'>6:15pm - 7:45pm</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">WEDNESDAY</th>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>7:30pm - 8:30pm</td>
          <td className='text-center p-1'>6:15pm - 7:15pm</td>
          <td className='text-center p-1'>5:00pm - 6:00pm</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">THURSDAY</th>
          <td className='text-center p-1'>6:15pm - 7:45pm</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>5:00pm - 6:00pm</td>
          <td className='text-center p-1'>-</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">FRIDAY</th>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>7:30pm - 8:30pm</td>
          <td className='text-center p-1'>6:15pm - 7:15pm</td>
          <td className='text-center p-1'>5:00pm - 6:00pm</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">SATURDAY</th>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>11:00am - 12:00pm</td>
        </tr>
        <tr className='text-xs'>
          <th className='text-end' scope="row">SUNDAY</th>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
          <td className='text-center p-1'>-</td>
        </tr>
        {/* <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
          HAP KI DO <div className='whitespace-normal ml-8 flex grow justify-end text-end'>(ages 10+) Tues/Thu: 6:15-7:45pm</div>
        </li>
        <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
          TAE KWON DO <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Mon/Wed/Fri: Kids (ages 5-12) 6:15-7:15pm / Adults 7:30-8:30pm</div>
        </li>
        <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
          KICK BOXING <div className='ml-8 flex whitespace-normal grow justify-end text-end'>Adults Mon/Wed/Fri 5:00-6:00pm / Oct.3 Kids (ages 8-12) Th 5:00-6:00pm</div>
        </li>
        <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
          TODDLER'S CLASS <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Sat 11:00am-12:00pm</div>
        </li>
        <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
          WEAPONS TRAINING <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Sat: 12:30pm-1:30pm*</div>
        </li>
        <li className='mt-1 text-xs sm:text-sm md:text-md w-full justify-end flex flex-nowrap'>
          [subject to change]*
        </li> */}
      </table>
    </div>
  </div>
)

export default Schedule;