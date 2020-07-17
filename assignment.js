//_____________ Feet to Mile Convertion__________________

function feetToMile(value_in_feet){
  if(value_in_feet < 0){
    return "Distance can't be negative number."
  }
  else{
    let value_in_mile = value_in_feet/5280;
    return value_in_mile;
  }
}

let converted_in_mile = feetToMile(50000);
console.log("__________Output of feetToMile ______________");
console.log(converted_in_mile);


//_________________Wood Calculator________________

function woodCalculator(no_of_chair,no_of_table,no_of_bed){
  const unit_wood_chair = 1;
  const unit_wood_table = 3;
  const unit_wood_bed = 5;
  if(no_of_chair < 0 || no_of_table < 0 || no_of_bed < 0){
    return "No of chair/table/bed can not be Negative";
  }
  else{
    return no_of_chair*unit_wood_chair + no_of_table*unit_wood_table + no_of_bed*unit_wood_bed;
  }
}

let total_amount_of_wood = woodCalculator(2,-1,1);
console.log("__________Output of woodCalculator ______________");
console.log(total_amount_of_wood);


//_______________ Brick Calculator_______________________

function brickCalculator(no_of_stories){
  let amount_of_bricks = 0;
  if(no_of_stories < 0){
    return "Please enter a valid number which which numeric and greater than 0"; 
  }
  if(no_of_stories <= 10){
    amount_of_bricks = 1000*15*no_of_stories;
    return amount_of_bricks;
  }
  else if(no_of_stories <= 20){
      let no_of_stories_upperTen = no_of_stories-10;
      const bricks_for_tenStoried = 1000*15*10;
      let bricks_for_upperTen = 1000*12*no_of_stories_upperTen;
      amount_of_bricks = bricks_for_upperTen+bricks_for_tenStoried;
      return amount_of_bricks;
  }
  else if(no_of_stories>20){
    const bricks_for_twentyStoried = (1000*15*10)+(1000*12*10);
    let stories_upperTwenty = no_of_stories-20;
    let bricks_for_upperTwenty = 1000*10*stories_upperTwenty;
    amount_of_bricks = bricks_for_twentyStoried+bricks_for_upperTwenty;
    return amount_of_bricks;
  }
}

let total_bricks_needed=brickCalculator(-21);
console.log("__________Output of brickCalculator______________");
console.log(total_bricks_needed);

//______________________Tiny Friends______________________

function tinyFriend(...friends){
  let output_name = [];
if(friends.length > 1){
  let min_length_of_name = friends[0].length;
  output_name[0]=friends[0];
  for(let i=1;i<friends.length;i++){
    if(friends[i].length > 0){
      let length_of_name=friends[i].length;
      if(length_of_name<min_length_of_name){
        min_length_of_name=length_of_name;
        let output_length=output_name.length;
        output_name.splice(0,output_length);
        output_name[0]=friends[i]; 
      }
      else if(length_of_name==min_length_of_name){
        output_name.push(friends[i]);
      }
    }
  }
}
else{
  output_name = friends;
}
return output_name;
}

let name=tinyFriend("Maimoona","mim","Roy","Xu");
console.log("__________Output of tinyFriends______________");
console.log(name);