import Posts from '../../../data.json'

export default function hundlerId(req, res) {
    const {method, cookies, query} = req;

    const {id} = query;
  
    const post = Posts.post.find(ps => ps.id == id);

    if(!post){
        res.status(404).json({message: 'Id bulunamadı.'})
    }

    res.status(200).json(post)


    console.log(id, 'QUERY')
}
