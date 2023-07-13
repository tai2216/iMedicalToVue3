<template>
    <!-- 左邊 -->
    <div class="container-left">
        <!-- 導覽列 -->
        <nav id="sidebar">
            <!-- 展往左邊/縮起來 按鈕 -->
            <button type="button" id="collapse" class="collapse-btn">
                <i class="fa-solid fa-align-left"></i>
            </button>


            <!-- List 列表 -->
            <ul class="list-unstyled">
                <p>後台管理</p>
                <li>
                    <a href="http://localhost:8081/iMedical/Backstage">首頁<i class="fa-solid fa-house"></i> </a>
                </li>
                <li>
                    <a href="#sublist" data-bs-toggle="collapse" id="dropdown">管理<i class="fa-solid fa-list-check"></i></a>
                    <!-- 子連結列表 -->
                    <ul id="sublist" class="list-unstyled collapse">
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/getallEmployee">管理員工</a>
                        </li>
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/getAllMember">管理會員</a>
                        </li>
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/getAllRealAssistiveDevice">管理輔具</a>
                        </li>
                        <li>
                            <a
                                href="http://localhost:8081/iMedical/Backstage/getAllAssistiveDeviceApplicationForm">管理輔具表單</a>
                        </li>
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/getAllAgency">管理機構</a>
                        </li>
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/getAllCommodities">管理商品</a>
                        </li>
                        <li>
                            <a href="http://localhost:8081/iMedical/Backstage/searchAllNews">管理公告</a>
                        </li>

                    </ul>
                </li>

                <li>
                    <a href="#sublist2" data-bs-toggle="collapse" id="dropdown">表單<i class="fa-brands fa-wpforms"></i></a>
                    <ul id="sublist2" class="list-unstyled collapse">
                        <li>
                            <a class="dropdown-item"
                                href="http://localhost:8081/iMedical/Backstage/goAddEmployee">新進員工表單</a>
                            <a class="dropdown-item" href="http://localhost:8081/iMedical/Backstage/goAddMember">新進會員表單</a>
                            <a class="dropdown-item"
                                href="http://localhost:8081/iMedical/Backstage/goAddRealAssistiveDevice">輔具表單</a>
                            <a class="dropdown-item" href="http://localhost:8081/iMedical/Backstage/goAddAgency">機構表單</a>
                            <a class="dropdown-item"
                                href="http://localhost:8081/iMedical/Backstage/goAddCommodities">商品表單</a>
                            <a class="dropdown-item" href="http://localhost:8081/iMedical/Backstage/addNewsMessage">公告表單</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="http://localhost:8081/iMedical/Backstage/getAllEditLog">編輯紀錄<i
                            class="fa-brands fa-wpforms"></i></a>
                </li>

            </ul>


        </nav>
    </div>
</template>

