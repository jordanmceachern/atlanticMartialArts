import React from 'react';

export const Schedule = () => (
  <div
    className='flex grow h-72 sm:h-96 w-full overflow-auto max-w-[calc(100vw-32px)] rounded-lg'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696165783/AMAA/turny_kick_j5zrst.jpg)',
    }}
  >
    <div className='flex h-full w-full p-4 pb-8 min-w-[650px] min-h-[450px] sm:min-h-[300px] items-center justify-start bg-black/50 rounded-lg'>
      <table
        aria-label='class schedule'
        className='h-full w-full rounded-lg text-white border-separate border-spacing-0'
      >
        <caption className='text-sm sm:text-md md:text-base underline mb-1 pt-8 mx-auto'>SCHEDULE</caption>
        <thead>
          <tr className='text-xs'>
            <th className='text-end sticky top-0 left-0 z-20 p-2' scope="col">WEEK DAY</th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>HAP KI DO</p>
              <p>(ages 10+)</p>
            </th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>TAE KWON DO</p>
              <p>Adults</p>
            </th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>TAE KWON DO</p>
              <p>Kids (ages 5-12)</p>
            </th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>KICK BOXING</p>
              <p>Adults</p>
            </th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>KICK BOXING</p>
              <p>Kids (ages 8-12)</p>
            </th>
            <th className='sticky top-0 z-10 p-2' scope="col">
              <p>TODDLERS</p>
              <p>(ages 3-4)</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">MONDAY</th>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>7:30pm - 8:30pm</td>
            <td className='text-center p-1'>6:15pm - 7:15pm</td>
            <td className='text-center p-1'>5:00pm - 6:00pm</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">TUESDAY</th>
            <td className='text-center p-1'>6:15pm - 7:45pm</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">WEDNESDAY</th>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>7:30pm - 8:30pm</td>
            <td className='text-center p-1'>6:15pm - 7:15pm</td>
            <td className='text-center p-1'>5:00pm - 6:00pm</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">THURSDAY</th>
            <td className='text-center p-1'>6:15pm - 7:45pm</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>5:00pm - 6:00pm</td>
            <td className='text-center p-1'>-</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">FRIDAY</th>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>7:30pm - 8:30pm</td>
            <td className='text-center p-1'>6:15pm - 7:15pm</td>
            <td className='text-center p-1'>5:00pm - 6:00pm</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">SATURDAY</th>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>11:00am - 12:00pm</td>
          </tr>
          <tr className='text-xs'>
            <th className='text-end sticky left-0 z-10 p-2' scope="row">SUNDAY</th>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
            <td className='text-center p-1'>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Schedule;