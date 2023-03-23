<?php 

namespace App\Http\Controllers\Posts;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Post;
use Illuminate\Support\Str;

class PostsController extends Controller {

    public function __construct() {
         $this->middleware('checkToken')->except(['getAllPosts']);
    }

   public function getAllPosts(Request $request) {
        $allPost = Post::with(['user'])->get();

        if($allPost != null) {
            return response()->json($allPost, 200);
        } 
   }

   public function createPosts(Request $request) {
       $validate = $request->validate([
        'title'=>['required'],
        'image'=>['required'],
        'description'=>['required']
       ]);

       $format_image = null;

       if($request->hasFile('image')){
          $storage = Storage::disk('posts_image');

          $format_image = date("YMD") . '_' . Str::random(15) . '.' . $request->file('image')->getClientOriginalExtension();

          $storage->putFileAs(null ,$request->file('image'), $format_image,null);
       }

       $created = Post::create([
        'title'=>$request->title,
        'image'=>$format_image,
        'description'=>$request->description
       ]);

       return response()->json($created);
   }

   public function deletePosts($id) {
       if($id) {
          $deleted = Post::where('id',$id)->delete();

          if($deleted) {
            return response()->json(['message'=>'deleted!']);
          }
       }
   } 

   public function updatePosts(Request $request, $id) {

   

    $find_post = Post::find($id);

    if($find_post) {
        $validate = $request->validate([
            'title'=>['required'],
            'image'=>['required'],
            'description'=>['required']
           ]);

           $format_image = null;

           if($request->hasFile('image')){
               $storage = Storage::disk('posts_image');

               if($storage->exists($find_post->image)) {
                  $storage->delete($find_post->image);
               }
       
               $format_image = date("YMD") . '_' . Str::random(15) . '.' . $request->file('image')->getClientOriginalExtension();
               $storage->putFileAs(null ,$request->file('image'), $format_image,null);
            }
          }

          $updated = Post::where('id' ,$id)->update([
              'title'=>$request->title,
              'image'=>$format_image != null ? $format_image : $find_post->image ,
              'description'=>$request->description
          ]);

          if($updated) return response()->json($updated,200);

          return response()->json(['message'=>'failed'], 400);
    }

  
}