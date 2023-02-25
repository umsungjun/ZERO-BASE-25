import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'; // npm install moment --save를 터미널에 입력하면 오류 안뜸
import 'moment-timezone'

export default function Moment() {
    const momentDate = moment()
    const newMomentDate = momentDate.add(1, 'week') // 1주를 더한다
    const cloneNewMomentDate = newMomentDate.clone().add(1, 'week') // 복사한 후 1주를 더한다.

    const [day, setDay] = useState('')
    const birthday = useRef(null)
    console.log(birthday)
    const handleOnchangeBirthday = (e) => {
        // console.log(e.target.value)
        setDay(moment(e.target.value, 'YYYY-MM-DD').format('dddd'))
    }
    // useEffect(() => {

    // }, [day])
    return (
        <div>
            <h1>Moment</h1>
            <div>Imutable Check</div>
            <br />
            <div>
                {momentDate.format()} {/* 2023-02-23T20:18:44+09:00 */}
            </div>
            <br />
            <div>
                {newMomentDate.format()}
            </div>
            <br />
            <div>
                {cloneNewMomentDate.format()}
            </div>
            <br />
            <div>Summer Time (London)</div>
            <div>2018년 3월 10일 13시에 하루 더하기: {moment.tz('2018-03-10 13:00:00', 'America/New_York').add(1, 'day').format()}</div>
            <br />
            <div>2018년 3월 10일 13시에 24시간 더하기: {moment.tz('2018-03-10 13:00:00', 'America/New_York').add(24, 'hour').format()}</div>
            <br />
            <div>Leap year (London)</div>
            <div>
                2017년 1월 1일에 1년 빼기
                <br />
                {moment('2017-01-01').subtract(1, 'year').format()}
            </div>
            <br />
            <div>
                2017년 1월 1일에서 365일 빼기
                <br />
                {moment('2017-01-01').subtract(365, 'day').format()}
            </div>
            <br />
            <div>
                자신의 생일 요일
                <br />
                <input type="date" ref={birthday} onChange={handleOnchangeBirthday} />
                <div>무슨 요일일까?</div>
                <div>{day}</div>
            </div>
            <br />
            <div>
                날짜 두개 비교하기
                <br />
                <div>2017년 1월 1일과 2020년 1월 1일은 몇일 차이일까?</div>
                <div>{moment('2017-01-01 3:00').diff(moment('2020-01-01 3:00'), 'days')}</div>
            </div>
        </div>
    )
}
