��    �      |  �   �
      p  �   q  �     %   �  =   �  .     %   N  �   t  �   ^  a   
  G   l  J   �  I   �  %  I  �   o  �     A   �  ;     <   @  5   }  ;   �  G   �  <   7  0   t  =   �  ;   �  <     ;   \  <   �     �     �  �   �  �   �  7     7   P  /   �  ,   �  -   �          $  
   0     ;     K     k     �     �     �     �     �                4     <     D     K     ^     o     w     �     �     �     �     �  &   �               #     *     3     H     O     c  #   r     �     �  %   �     �     �     �           1  @   R  �   �     M     c     �     �     �  �   �     (      5      L      ]      c      h   	   �   .   �      �      �      �      !  	   !     (!     7!     F!  P   L!  Q   �!     �!     �!  6   �!     ,"  $   H"     m"     y"     �"     �"     �"  Q   �"     /#     7#  %   T#  -   z#     �#     �#     �#     �#  "   �#     $     $     %$     -$  	   :$     D$  
   R$     ]$     f$     }$     �$  !   �$     �$     �$     �$     %     %  4   .%     c%     j%  $   �%     �%     �%     �%     �%     �%     �%     &     ,&     F&     a&     {&     �&     �&     �&     �&  %   �&      '     '     '       '     A'  �   ^'     (  *   (  �  I(  �   �)  �   �*  4   D+  G   y+  <   �+  (   �+  �   ',  �   -  h   �-  X   <.  U   �.  Q   �.  %  =/  �   c0  �    1  L   �1  T   K2  N   �2  8   �2  E   (3  S   n3  V   �3  5   4  I   O4  E   �4  D   �4  A   $5  E   f5     �5  )   �5  �   �5  �   �6  G   B7  8   �7  =   �7  4   8  7   68     n8     �8     �8     �8  +   �8  *   �8  *   9     @9  !   Z9  &   |9  $   �9     �9  %   �9  	   �9  	   �9     	:     :     !:     5:      >:  (   _:     �:     �:     �:  )   �:  :   �:  
    ;     +;     7;  	   ?;     I;     \;  #   a;     �;  .   �;      �;     �;  8   <     ;<     Y<  ,   r<  "   �<  0   �<  K   �<  �   ?=      >  !   7>     Y>     p>     v>  �   >     _?     y?     �?     �?     �?     �?     �?  ;   �?     )@     H@     d@  "   }@     �@     �@     �@     �@  `   �@  [   LA     �A     �A  J   �A  &   �A  5   $B     ZB  !   gB  %   �B     �B     �B  Z   �B     9C  *   BC  5   mC  =   �C     �C     �C     D     D  *   5D      `D     �D  	   �D     �D     �D     �D     �D  	   �D     �D     �D  (   E  $   6E     [E     qE  (   �E     �E     �E  :   �E     F  %   F  2   =F     pF  !   vF     �F     �F  
   �F     �F  !   �F  "   G     &G     EG     aG      ~G     �G     �G  0   �G  0   �G  	   H     "H     4H  "   NH  %   qH  �   �H  #   aI  $   �I     '       A   	   ?   4   K   �   2         �   �          �   �   :   )   &       �   �           3       �       Y   _   L   M   =       ^   �       6   I   T      �           U   c      %   �   �                      >          C       E   7   9   h   R   �   8              �   v   -       e       N      �   "               o               �   (   F   0       .   w   g       �          x          �   �       S           $   ,   1       [         +   �           z          �   s   H       �   �   B      �       y          �   |   *      @   Q       
          O                  J   n   j   P   �   W   i   �   }   �          t   !   �   �   q      #   �   �   �   �      X           ;      f   �      a   �   <   \   k   `              {   l         D   �   Z   V       �   �       �          p   �       �   G       ]      b   ~   r   �   5   d       �   u   �   m   /        ->  It will ban particular users by just putting their ids seprated by commas(,). If user is Ban then they will not able to access wp file manager on front end. -> * for all operations and to allow some operation you can mention operation name as like, allowed_operations="upload,download". Note: seprated by comma(,). Default: * -> File Manager Theme. Default: Light -> File Modified or Create date format. Default: d M, Y h:i A -> File manager Language. Default: English(en) -> Filemanager UI View. Default: grid -> Here "test" is the name of folder which is located on root directory, or you can give path for sub folders as like "wp-content/plugins". If leave blank or empty it will access all folders on root directory. Default: Root directory -> It will allow all roles to access file manager on front end or You can simple use for particular user roles as like allowed_roles="editor,author" (seprated by comma(,)) -> It will lock mentioned in commas. you can lock more as like ".php,.css,.js" etc. Default: Null -> for access to read files permission, note: true/false, default: true -> for access to write files permissions, note: true/false, default: false -> it will hide mentioned here. Note: seprated by comma(,). Default: Null <code>[wp_file_manager view="list" lang="en" theme="light" dateformat="d M, Y h:i A" allowed_roles="editor,author" access_folder="wp-content/plugins" write = "true" read = "false" hide_files = "kumar,abc.php" lock_extensions=".php,.css" allowed_operations="upload,download" ban_user_ids="2,3"] <code>[wp_file_manager]</code> -> It will show file manager on front end. But only Administrator can access it and will control from file manager settings. <code>[wp_file_manager_admin]</code> -> It will show file manager on front end. You can control all settings from file manager settings. It will work same as backend WP File Manager. <span class="fm_console_error">Nothing selected for backup</span> <span class="fm_console_error">Others backup failed.</span> <span class="fm_console_error">Plugins backup failed.</span> <span class="fm_console_error">Security Issue.</span> <span class="fm_console_error">Themes backup failed.</span> <span class="fm_console_error">Unable to create database backup.</span> <span class="fm_console_error">Uploads backup failed.</span> <span class="fm_console_success">All Done</span> <span class="fm_console_success">Database backup done.</span> <span class="fm_console_success">Others backup done.</span> <span class="fm_console_success">Plugins backup done.</span> <span class="fm_console_success">Themes backup done.</span> <span class="fm_console_success">Uploads backup done.</span> Action Actions upon selected backup(s) Admin can restrict actions of any user. Also hide files and folders and can set different - different folders paths for different users. Admin can restrict actions of any userrole. Also hide files and folders and can set different - different folders paths for different users roles. After enable trash, your files will go to trash folder. After enabling this all files will go to media library. Are you sure want to remove selected backup(s)? Are you sure you want to delete this backup? Are you sure you want to restore this backup? Backup / Restore Backup Date Backup Now Backup Options: Backup data (click to download) Backup files will be under Backup is running, please wait Backup not found! Backup removed successfully! Backup successfully deleted. Backups removed successfully! Ban Browser and OS (HTTP_USER_AGENT) Buy PRO Buy Pro Cancel Change Theme Here: Code-editor View Confirm Copy files or folders Currently no backup(s) found. DELETE FILES Dark Database Backup Database backup done on date  Database backup restored successfully. Default Default: Delete Deselect Dismiss this notice. Donate Download Files Logs Download files Duplicate or clone a folder or file Edit Files Logs Edit a file Enable Files Upload to Media Library? Enable Trash? Existing Backup(s) Extract archive or zipped file File Manager - Shortcode File Manager - System Properties File Manager Root Path, you can change according to your choice. File Manager has a code editor with multiple themes. You can select any theme for code editor. It will display when you edit any file. Also you can allow fullscreen mode of code editor. File Operations List: File doesn't exist to download. Files Backup Gray Help Here admin can give access to user roles to use filemanager. Admin can set Default Access Folder and also control upload size of filemanager. Info of file Invalid Security Code. Last Log Message Light Logs Make directory or folder Make file Maximum file upload size (upload_max_filesize) Memory Limit (memory_limit) Missing backup id. Missing parameter type. Missing required parameters. No Thanks No log message No logs found! Note: Note: These are demo screenshots. Please buy File Manager pro to Logs functions. Note: This is just a demo screenshot. To get settings please buy our pro version. OK Ok Others (Any other directories found inside wp-content) Others backup done on date  Others backup restored successfully. PHP version Paste a file or folder Please Enter Email Address. Please Enter First Name. Please Enter Last Name. Please change this carefully, wrong path can lead file manager plugin to go down. Plugins Plugins backup done on date  Plugins backup restored successfully. Post maximum file upload size (post_max_size) Preferences Privacy Policy Public Root Path RESTORE FILES Remove or delete files and folders Rename a file or folder Restore SUCCESS Save Changes Saving... Search things Select All Settings Settings - Code-editor Settings - General Settings - User Restrictions Settings - User Role Restrictions Settings saved. Shortcode - PRO Simple cut a file or folder System Properties Terms of Service The backup apparently succeeded and is now complete. Themes Themes backup done on date  Themes backup restored successfully. Time now Timeout (max_execution_time) To make a archive or zip Today USE: Unable to removed backup! Unable to restore DB backup. Unable to restore others. Unable to restore plugins. Unable to restore themes. Unable to restore uploads. Upload Files Logs Upload files Uploads Uploads backup done on date  Uploads backup restored successfully. Verify View Log WP File Manager WP File Manager - Backup/Restore WP File Manager Contribution We love making new friends! Subscribe below and we promise to
    keep you up-to-date with our latest new plugins, updates,
    awesome deals and a few special offers. Welcome to File Manager You have not made any changes to be saved. Project-Id-Version: WP File Manager
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2021-07-16 15:02+0530
Last-Translator: admin <kajal.gill@mysenseinc.in>
Language-Team: 
Language: eu
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=n != 1;
X-Generator: Poedit 2.4.3
X-Poedit-KeywordsList: __;_e
X-Poedit-Basepath: ..
X-Poedit-SearchPath-0: .
 -> Erabiltzaile partikularrak debekatuko ditu komaz bereizitako IDak jarrita (,). Erabiltzailea Debekatuta badago, ezin izango dute frontendean wp fitxategi kudeatzailea sartu. -> * eragiketa guztietarako eta eragiketa batzuk onartzeko eragiketaren izena aipa dezakezu, allowed_operations="upload,download". Oharra: komaz (,) bereizita. Lehenetsia: * -> Fitxategi kudeatzailearen gaia. Lehenetsia: Light -> Fitxategia aldatu edo Sortu data formatua. Lehenetsia: d M, Y h: i A -> Fitxategi kudeatzailea Hizkuntza. Lehenetsia: English(en) -> Filemanager UI View. Lehenetsia: grid -> Hemen "test" erro direktorioan dagoen karpetaren izena da, edo azpikarpeten bidea eman dezakezu "wp-content / plugins" bezala. Hutsik edo hutsik uzten baduzu root direktorioko karpeta guztietara sartuko da. Lehenetsia: Root directory -> Rol guztiak fitxategi-kudeatzailean frontendean sartzeko aukera emango du edo Erabiltzaile rol jakin batzuetarako erraz erabil dezakezu allowed_roles="editor,author" (komaz (,) bereizita) -> Komaz aipatutako blokeatuko da. gehiago blokea ditzakezu ".php, .css, .js" eta abar. Lehenetsia: Null -> fitxategiak irakurtzeko baimena eskuratzeko, oharra: egia / gezurra, lehenetsia: true -> Fitxategiak idazteko baimenak atzitzeko, oharra: egia / gezurra, lehenetsia: false -> hemen aipatutakoa ezkutatuko da. Oharra: komaz (,) bereizita. Lehenetsia: Null <code>[wp_file_manager view="list" lang="en" theme="light" dateformat="d M, Y h:i A" allowed_roles="editor,author" access_folder="wp-content/plugins" write = "true" read = "false" hide_files = "kumar,abc.php" lock_extensions=".php,.css" allowed_operations="upload,download" ban_user_ids="2,3"] <code> [wp_file_manager] </code> -> Frontend fitxategien kudeatzailea erakutsiko du. Baina administratzaileak soilik sar dezake eta fitxategi kudeatzailearen ezarpenetatik kontrolatuko du. <code> [wp_file_manager_admin] </code> -> Frontend fitxategien kudeatzailea erakutsiko du. Ezarpen guztiak fitxategi kudeatzailearen ezarpenetatik kontrola ditzakezu. WP fitxategi kudeatzailearen backend funtzionatuko du. <span class="fm_console_error">BEz da ezer hautatu babeskopia egiteko</span> <span class="fm_console_error">Beste batzuek segurtasun kopia huts egin dute.</span> <span class="fm_console_error">Pluginen segurtasun kopiak huts egin du.</span> <span class="fm_console_error">Segurtasun arazoa.</span> <span class="fm_console_error">Gaien babeskopiak huts egin du.</span> <span class="fm_console_error">Ezin da datu basearen segurtasun kopia sortu.</span> <span class="fm_console_error">Ezin izan da kargatzearen segurtasun kopia egin.</span> <span class="fm_console_success">Guztia Eginda</span> <span class="fm_console_success">Datu-basearen babeskopia egin da.</span> <span class="fm_console_success">Beste kopia batzuk egin dira.</span> <span class="fm_console_success">Pluginen babeskopia egin da.</span> <span class="fm_console_success">Gaien babeskopia egin da.</span> <span class="fm_console_success">Kargatutako kopiak egin dira.</span> Ekintza Aukeratutako babeskopien gaineko ekintzak Administratzaileak edozein erabiltzaileren ekintzak muga ditzake. Fitxategiak eta karpetak ere ezkutatu eta erabiltzaile desberdinentzako karpeten bide desberdinak ezar ditzakezu. Administratzaileak edozein erabiltzaileren ekintzak muga ditzake. Fitxategiak eta karpetak ezkutatu eta karpeta desberdinak ezar ditzakezu erabiltzaileen rol desberdinetarako. Zakarrontzia gaitu ondoren, zure fitxategiak zakarrontzira joango dira. Gaitu ondoren fitxategi guztiak mediatekara joango dira. Ziur zaude hautatutako segurtasun kopiak kendu nahi dituzula? Ziur zaude segurtasun kopia hau ezabatu nahi duzula? Ziur zaude segurtasun kopia hau leheneratu nahi duzula? Babeskopia / Berreskuratu Babeskopia-data Babeskopia orain Babeskopien aukerak: Babeskopia datuak (egin klik deskargatzeko) Babeskopien fitxategiak azpian egongo dira Babeskopiak martxan daude, itxaron mesedez Babeskopia ez da aurkitu! Babeskopia behar bezala kendu da! Babeskopiak behar bezala ezabatu dira. Babeskopiak behar bezala kendu dira! Debeku Arakatzailea eta OS (HTTP_USER_AGENT) Erosi PRO Erosi Pro Utzi Hemen aldatu gaia: Kode editorea Ikusi Berretsi Kopiatu fitxategiak edo karpetak Une honetan ez da babeskopiarik aurkitu. EZABATU FITXATEGIAK Iluna Datu basearen babeskopia Datu-basearen babeskopia egunean egin da  Datu basearen segurtasun kopia behar bezala berrezarri da. Lehenetsia Lehenetsia: Ezabatu Desautatu Baztertu ohar hau. Eman Deskargatu fitxategien erregistroak Deskargatu fitxategiak Karpeta edo fitxategi bat bikoiztu edo klonatu Editatu fitxategien erregistroak Editatu fitxategi bat Multimedia liburutegian fitxategiak kargatu nahi dituzu? Zaborrontzia gaitu nahi duzu? Dauden segurtasun kopiak Atera artxiboa edo konprimitutako fitxategia Fitxategi kudeatzailea - Shortcode Fitxategi kudeatzailea - Sistemaren propietateak Fitxategi kudeatzailearen erro bidea, zure aukeraren arabera alda dezakezu. Fitxategi kudeatzaileak kode editorea du gai anitzekin. Kode editorerako edozein gai hauta dezakezu. Edozein fitxategi editatzen duzunean bistaratuko da. Kode editorearen pantaila osoko modua ere baimendu dezakezu. Fitxategien eragiketen zerrenda: Ez dago fitxategia deskargatzeko. Fitxategien babeskopia grisa Laguntza Hemen administratzaileak erabiltzaileen roletarako sarbidea eman dezake filemanager erabiltzeko. Administratzaileak sarbide-karpeta lehenetsia ezar dezake eta fitxategi-kudeatzailearen igoeraren tamaina ere kontrola dezake. Fitxategiaren informazioa Segurtasun kodea baliogabea. Azken erregistro mezua Argia Erregistroak Egin direktorioa edo karpeta Egin fitxategia Gehienezko fitxategi kargaren tamaina (upload_max_filesize) Memoriaren muga (memory_limit) Babeskopiaren IDa falta da. Parametro mota falta da. Beharrezko parametroak falta dira. Ez eskerrik asko Ez dago egunkari mezurik Ez da egunkaririk aurkitu! Ohar: Oharra: Demo pantaila-argazkiak dira. Mesedez, erosi File Manager pro egunkariak funtzioetarako. Oharra: hau demo pantaila-argazkia da. Ezarpenak lortzeko, mesedez erosi gure pro bertsioa. Ados Ados Beste batzuk (wp-content barruan aurkitzen diren beste edozein direktorio) Beste kopia batzuk egunean egindakoak  Beste segurtasun kopia batzuk ongi zaharberritu dira. PHP bertsioa Itsatsi fitxategi edo karpeta bat Mesedez, idatzi helbide elektronikoa. Mesedez, jarri izena. Mesedez, idatzi abizena. Aldatu hau arretaz, bide okerrak fitxategi kudeatzailearen plugina jaistera eraman dezake. Pluginak Pluginen segurtasun kopia egunean egin da  Pluginen segurtasun kopia behar bezala berrezarri da. Igotako gehienezko fitxategi kargaren tamaina (post_max_size) Lehentasunak Pribatutasun politika Sustraien bide publikoa FITXATEGIAK BERRESKURATU Kendu edo ezabatu fitxategiak eta karpetak Aldatu fitxategi edo karpeta bat Berreskuratu ARRAKASTA Aldaketak gorde Gordetzen ... Gauzak bilatu Hautatu guztiak Ezarpenak Ezarpenak - Kode editorea Ezarpenak - Orokorra Ezarpenak - Erabiltzaileen murriztapenak Ezarpenak - Erabiltzaile rolen mugak Ezarpenak gorde dira. Shortcode - PRO Fitxategi edo karpeta bat moztu sinpleki Sistemaren propietateak Zerbitzu-baldintzak Badirudi babeskopiak arrakasta izan duela eta amaitu dela. Gaiak Gaien segurtasun kopia egunean egina  Gaien segurtasun kopia behar bezala berrezarri da. Ordua Denbora-muga (max_execution_time) Artxiboa edo zip kodea egiteko Gaur ERABILERA: Ezin da kendu babeskopia! Ezin da DB babeskopia leheneratu. Ezin dira beste batzuk leheneratu. Ezin dira pluginak leheneratu. Ezin dira gaiak leheneratu. Ezin dira kargak leheneratu. Kargatu fitxategiak erregistroak Fitxategiak igo Kargak Kargatutako segurtasun kopiak egunean egin dira  Kargak babeskopiak behar bezala berrezarri dira. Egiaztatu Ikusi erregistroa WP fitxategi kudeatzailea WP File Manager - Backup / Restore WP fitxategi kudeatzailearen ekarpena Lagun berriak egitea maite dugu! Harpidetu behean eta hala agintzen dugu
    eguneratuta mantendu zaitez gure azken plugin berriekin, eguneratzeekin,
    eskaintza bikainak eta eskaintza berezi batzuk. Ongi etorri fitxategi kudeatzailera Ez duzu gordetzeko aldaketarik egin. 