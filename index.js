list_sentences = [];
plotly_heatmap = {data:[], layout:{}};
input_sentences = "";
input_threshold = 0.5;
output_resultshtml = "";
analyzing_text = true;

input_sentences =
`Will it snow tomorrow?
Recently a lot of hurricanes have hit the US
Global warming is real

An apple a day, keeps the doctors away
Eating strawberries is healthy

what is your age?
How old are you?
How are you?

The dog bit Johnny
Johnny bit the dog

The cat ate the mouse
The mouse ate the cat
`;

$("#input_sentences").text(input_sentences);
$("#input_threshold").text(input_threshold);

async function onClickAnalyzeSentences(){

  var list_sentences = [];
  var input_sentences = $("#input_sentences").val().split("\n");
  for(var i in input_sentences){
    if(input_sentences[i].length){
      list_sentences.push(input_sentences[i]);
    }
  }

  console.log(list_sentences);
  this.get_similarity(list_sentences);
}

function get_embeddings(list_sentences, callback) {
    use.load().then(model => {
      model.embed(list_sentences).then(embeddings => {
        callback(embeddings);
      });
    });
}

function dot(a, b){
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var sum = 0;
  for (var key in a) {
    if (hasOwnProperty.call(a, key) && hasOwnProperty.call(b, key)) {
      sum += a[key] * b[key]
    }
  }
  return sum
}

function similarity(a, b) {
  var magnitudeA = Math.sqrt(this.dot(a, a));
  var magnitudeB = Math.sqrt(this.dot(b, b));
  if (magnitudeA && magnitudeB)
    return this.dot(a, b) / (magnitudeA * magnitudeB);
  else return false
}

function cosine_similarity_matrix(matrix){
  let cosine_similarity_matrix = [];
  for(let i=0;i<matrix.length;i++){
    let row = [];
    for(let j=0;j<i;j++){
      row.push(cosine_similarity_matrix[j][i]);
    }
    row.push(1);
    for(let j=(i+1);j<matrix.length;j++){
      row.push(this.similarity(matrix[i],matrix[j]));
    }
    cosine_similarity_matrix.push(row);
  }
  return cosine_similarity_matrix;
}

function form_groups(cosine_similarity_matrix){
  let dict_keys_in_group = {};
  let groups = [];

  for(let i=0; i<cosine_similarity_matrix.length; i++){
    var this_row = cosine_similarity_matrix[i];
    for(let j=i; j<this_row.length; j++){
      if(i!=j){
        let sim_score = cosine_similarity_matrix[i][j];

        input_threshold = $("#input_threshold").val();

        if(sim_score > input_threshold){

          let group_num;

          if(!(i in dict_keys_in_group)){
            group_num = groups.length;
            dict_keys_in_group[i] = group_num;
          }else{
            group_num = dict_keys_in_group[i];
          }
          if(!(j in dict_keys_in_group)){
            dict_keys_in_group[j] = group_num;
          }

          if(groups.length <= group_num){
            groups.push([]);
          }
          groups[group_num].push(i);
          groups[group_num].push(j);
        }
      }
    }
  }

  let return_groups = [];
  for(var i in groups){
    return_groups.push(Array.from(new Set(groups[i])));
  }

  console.log(return_groups);
  return return_groups;
}

async function get_similarity(list_sentences){

  let callback = function(embeddings) {


    let cosine_similarity_matrix = this.cosine_similarity_matrix(embeddings.arraySync());

    console.log(cosine_similarity_matrix);

    let groups = this.form_groups(cosine_similarity_matrix);

    let html_groups = "";
    for(let i in groups){
      html_groups+="<br/><b>Group "+String(parseInt(i)+1)+"</b><br/>";
      for(let j in groups[i]){
        console.log(groups[i][j], list_sentences[ groups[i][j] ])
        html_groups+= list_sentences[ groups[i][j] ] + "<br/>";
      }
    }

    $("#output_resultshtml").html(html_groups);
    console.log(html_groups)

    // plot heatmap
    let colors = [];
    let base_color = 54;
    for(let i=0;i<=10;i++){
      colors.push([i/10, "rgb(0,"+(base_color+(i*20))+",0)"]);
    }

    let data = [
      {
        z: cosine_similarity_matrix,// [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
        x: list_sentences,
        y: list_sentences,
        type: 'heatmap',
        colorscale: colors
      }
    ];
    let layout = {
        showlegend: false,
        width: $(div_heatmap).width(),
        height: $(div_heatmap).width()/2,
    };
    Plotly.newPlot('div_heatmap', data, layout);

    $('#load_fetch_data').hide();
  };

  $('#load_fetch_data').show();
  let embeddings = await this.get_embeddings(list_sentences, callback.bind(this));

}

onClickAnalyzeSentences();
