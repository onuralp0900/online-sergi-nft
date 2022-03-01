<template>
  <nav class="teal lighten-2">
      <div>
          <router-link :to="{name:'Home'}" class="brand-logo center">
          ExonArt
          </router-link>
          <ul class="right">
          
           
              
        </ul>
      </div>
  </nav>
</template>

<script>
import {firebase,authRef,firestoreRef} from '@/firebase/config'
import { useRouter} from 'vue-router'
export default {

    setup(){
        
        const router=useRouter()
        const handleGiris=async ()=>{

            const provider=new firebase.auth.GoogleAuthProvider()
            console.log(provider); 

            await authRef.signInWithPopup(provider).then(async()=>{
                //console.log(authRef.currentUser);

                const {uid,displayName,email,photoURL}=authRef.currentUser

                const snapshot=await firestoreRef.collection('kullanicilar').where('uid','==',uid).get()

                console.log(snapshot);

                if(snapshot.empty){
                    console.log('kullanıcı kaydı bulunamadı');

                    const yeniKullanici={
                        uid,
                        kullaniciAd:displayName,
                        email,
                        fotoURL:photoURL,
                        yetki:'yok'
                    }

                    firestoreRef.collection('kullanicilar').add(yeniKullanici).then(()=>{
                        router.push({name:'Profil'})
                    })

                }else{
                    console.log('kullanıcı kaydı bulundu');
                    router.push({name:'Profil'})
                }
            })
        }

        return {handleGiris,}
    }
    
   
}
</script>

<style>

</style>