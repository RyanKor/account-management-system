import React from 'react'


const Employees = ()=> {
    return (
        <div className="Employ-List">
            <div className="employee1">
                <div>ID</div>
                <div>이름</div>
                <div>입사년도</div>
                <div>근속 일자</div>
                <div>급여(근로 계약서, ID에 부여된 급여 대장 조회 페이지로 이동)</div>
                <div>근속 상태 : 수습 / 정직원 (추후 선택 메뉴로 변경)</div>
                <div>세금 코드</div>
                <div>입사 서류 확인하기(대학졸업 증명서, 건강보험증명서, 거주 수첩, 가족관계 증명서 등)</div>
            </div>
        </div>
    )
}

export default Employees