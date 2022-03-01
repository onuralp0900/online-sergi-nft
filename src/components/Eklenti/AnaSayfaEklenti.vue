<template> <br>
<div class="container">
<div class="row">



 <div class="card">
    <div class="card-content">
     <a class="waves-effect waves-light btn-flat" @click="handleGiris">
             <i class="fab fa-google-plus-g"> ile giriş yap</i>
             </a>
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a href="sergi-listesi">Sergileri Gez</a></li>
        <li class="tab"><a class="active" href="#test5">Hakkımızda</a></li>
        <li class="tab"><a href="#test6">Sistem Hakkında</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
      <a class="waves-effect waves-light btn-flat" href="profil">
             <i class="fa fa-user">Giriş yaptıysan bağlantıya ile profil sayfasına gidebilitsin</i>
          </a>
    </div>
  </div>  

</div>
</div>
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

        return {handleGiris}
    }
    
   
}
</script>


