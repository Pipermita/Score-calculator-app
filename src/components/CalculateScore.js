import { useState } from "react";


function CalculateScore () {
        const [s1, setScore1] = useState();
        const [s2, setScore2] = useState();
        const [s3, setScore3] = useState();
        const [sum, setSum] = useState();
        const [average, setAvg] = useState();
        const [grades, setGrade] = useState();
        var scoresum;
        var grade;
        var avg;
function handleClick(){

    scoresum= Number(s1) + Number(s2) + Number(s3);

    setSum(scoresum);

    avg = Number(scoresum/3);

    setAvg(avg);

    if(avg < 75)
    {
        grade = "Failed"
    }
    else 
    {
        grade = "Passed"
    }

    setGrade(grade);
}

    return (
        <div class="container">

            <h1>Calculate Score</h1>
                <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control">
                </input>
                </div>

                <div class="form-group">
                <label>Score 1</label>
                <input type="text" name="s1" class="form-control" onChange={(event) =>
                    {
                        setScore1(event.target.value);
                    }}>
                </input>
                </div>

                <div class="form-group">
                <label>Score 2</label>
                <input type="text" name="s2" class="form-control" onChange={(event) =>
                    {
                        setScore2(event.target.value);
                    }}>
                </input>
                </div>

                <div class="form-group">
                <label>Score 3</label>
                <input type="text" name="s3" class="form-control" onChange={(event) =>
                    {
                    setScore3(event.target.value);
                    }}>
                </input>
                </div>

                <div class="form-group">
                <label>Sum</label>
                <input type="text" class="form-control" value={ sum }></input>
                </div>

                <div class="form-group">
                <label>Average</label>
                <input type="text" class="form-control" value={ average }></input>
                </div>

                <div class="form-group">
                <label>Grade</label>
                <input type="text" class="form-control" value={ grades }></input>
                </div>

                <button onClick={handleClick} class="btn btn-warning mt-4" >Grade Now</button>
        </div>
    );
    
}
    export default CalculateScore;